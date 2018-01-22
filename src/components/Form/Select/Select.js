import React from 'react'
import PropTypes from 'prop-types'
import InputBase from '../Inputs/Input'
import View from './SelectView'

export default class Select extends InputBase {
  static propTypes = {
    children: PropTypes.any,
    required: PropTypes.bool,
  }

  static defaultProps = {
    validator: 'textArea',
  }

  componentDidMount() {
    this.setValue(this.value || this.props.defaultValue || (this.props.multiple ? [] : ''))
  }

  isValid = (value) => {
    const { required } = this.props
    value = value || this.value
    if (required && (!value || value.length <= 0)) {
      this.setState({ error: 'Select a valid option', invalid: true })
      return false
    } else {
      this.setState({ error: null, serverError: null, invalid: false })
      return true
    }
  }

  onChange = (event) => {
    let value
    if (this.props.multiple) {
      value = []
      Array.from(event.target.options).forEach(item => {
        if (item.selected) value.push(item.value)
      })
    } else {
      value = event.target.value
    }
    if (this.state.invalid) this.isValid(value)
    this.setValue(value)
  }

  get selectProps() {
    return {
      multiple: this.props.multiple,
      value: this.value || (this.props.multiple ? [] : ''),
    }
  }

  render() {
    const { children, width } = this.props
    const { error, serverError } = this.state
    return (
      <View error={error || serverError} inputProps={{...this.inputProps, ...this.selectProps}} options={children} width={width}>
        {this.label}
        {(error || serverError) && this.errorHTML}
      </View>
    )
  }
}
