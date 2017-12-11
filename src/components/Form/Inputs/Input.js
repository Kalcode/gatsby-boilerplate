import React, { Component } from 'react'
import PropTypes from 'prop-types'

import View from './InputView'
import Validators from './Validators'

export default class TextInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    formId: PropTypes.string,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    set: PropTypes.func,
    store: PropTypes.object,
    validator: PropTypes.string,
  }

  static defaultProps = {
    validator: 'noEmpty',
  }

  state = {
    error: null,
    invalid: null,
    serverError: null,
  }

  componentDidMount() {
    this.validator = Validators[this.props.validator]
    this.setValue(this.value || this.props.defaultValue || '')
  }

  componentWillReceiveProps(nextProps) {
    const { store, formId } = nextProps
    if (store[formId] && store[formId].error && store[formId].error.fields) {
      this.parseErrors(store[formId].error.fields)
    } else if (!this.state.invalid && this.state.error) {
      this.setState({ serverError: null })
    }
  }

  parseErrors(errors) {
    const fieldError = errors.find(error => error.ID === this.props.id)
    if (fieldError) this.setState({ serverError: fieldError.ErrorText })
  }

  get isInput() { return true }

  onChange = (event) => {
    const value = event.target.value
    if (this.state.invalid) this.isValid()
    this.setValue(value)
  }

  onBlur = (event) => {
    this.isValid()
  }

  setValue(value) {
    const { formId, id } = this.props
    this.props.set(formId, id, value)
  }

  isValid = () => {
    const { required } = this.props
    if (required && !this.validator.regEx.test(this.value)) {
      this.setState({ error: this.validator.error, invalid: true })
      return false
    } else {
      this.setState({ error: null, serverError: null, invalid: false })
      return true
    }
  }

  get isDisabled() {
    const { formId, store } = this.props
    return store[formId] && (store[formId].fetching || store[formId].submitted)
  }

  get value() {
    const { formId, store, id } = this.props
    if (store[formId] && store[formId].fields[id]) {
      return store[formId].fields[id]
    } else {
      return ''
    }
  }

  get inputProps() {
    return {
      disabled: this.isDisabled,
      hidden: this.props.hidden,
      onBlur: this.onBlur,
      onChange: this.onChange,
      placeholder: this.props.placeholder,
      required: this.props.required,
      value: this.value,
    }
  }

  get label() {
    let label = this.props.label
    if (this.props.required) label += '*'
    return label
  }

  get errorHTML() {
    const error = this.state.error || this.state.serverError
    return <span dangerouslySetInnerHTML={{ __html: ` (${error})` }} />
  }

  render() {
    const { error, serverError } = this.state
    return (
      <View error={error || serverError} inputProps={this.inputProps}>
        {this.label}
        {(error || serverError) && this.errorHTML}
      </View>
    )
  }
}
