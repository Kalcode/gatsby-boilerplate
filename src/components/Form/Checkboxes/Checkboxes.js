import React from 'react'
import PropTypes from 'prop-types'
import InputBase from '../Inputs/Input'
import View from './CheckboxesView'

export default class Checkboxes extends InputBase {
  static propTypes = {
    children: PropTypes.any,
    min: PropTypes.number,
  }

  checkboxes = []

  componentDidMount() {
    const { formId } = this.props
    this.props.children.forEach(item => {
      this.props.set(formId, item.id, this.getValue(item.id))
    })
  }

  isValid = () => {
    const { children, required } = this.props
    if (required && children.some(item => (this.getValue(item.id)))) {
      this.setState({ error: null, serverError: null, invalid: false })
      return true
    } else {
      const error = 'Cannot be empty'
      this.setState({ error: error, invalid: true })
      return false
    }
  }

  getValue = (id) => {
    const { formId, store } = this.props
    if (store[formId] && store[formId].fields[id]) {
      return store[formId].fields[id]
    } else {
      return ''
    }
  }

  setValue(value, id) {
    const { formId } = this.props
    this.props.set(formId, id, value)
  }

  onChange = (event) => {
    const id = event.target.id
    const value = event.target.checked ? event.target.value : ''
    this.setValue(value, id)
  }

  get inputProps() {
    return {
      disabled: this.isDisabled,
      hidden: this.props.hidden,
      onBlur: this.onBlur,
      onChange: this.onChange,
      required: this.props.required,
    }
  }

  render() {
    const { children } = this.props
    const { error, serverError } = this.state
    return (
      <View error={error || serverError} inputProps={this.inputProps} checkboxes={children} getValue={this.getValue}>
        {this.label}
        {(error || serverError) && this.errorHTML}
      </View>
    )
  }
}
