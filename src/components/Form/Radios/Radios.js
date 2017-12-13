import React from 'react'
import PropTypes from 'prop-types'
import InputBase from '../Inputs/Input'
import View from './RadiosView'

export default class Radios extends InputBase {
  static propTypes = {
    children: PropTypes.any,
    min: PropTypes.number,
  }

  checkboxes = []

  componentDidMount() {
    const { formId, id } = this.props
    this.props.set(formId, id, this.value)
  }

  isValid = () => {
    const { required } = this.props
    if (required && this.value) {
      this.setState({ error: null, serverError: null, invalid: false })
      return true
    } else {
      const error = 'Cannot be empty'
      this.setState({ error: error, invalid: true })
      return false
    }
  }

  setValue(value) {
    const { formId, id } = this.props
    this.props.set(formId, id, value)
  }

  onChange = (event) => {
    const value = event.target.checked ? event.target.value : ''
    this.setValue(value)
  }

  get inputProps() {
    return {
      disabled: this.isDisabled,
      hidden: this.props.hidden,
      onBlur: this.onBlur,
      onChange: this.onChange,
      required: this.props.required,
      name: this.props.id,
    }
  }

  render() {
    const { children } = this.props
    const { error, serverError } = this.state
    return (
      <View error={error || serverError} inputProps={this.inputProps} radios={children} value={this.value}>
        {this.label}
        {(error || serverError) && this.errorHTML}
      </View>
    )
  }
}
