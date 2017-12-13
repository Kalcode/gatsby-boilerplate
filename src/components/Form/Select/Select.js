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

  isValid = (value) => {
    const { required } = this.props
    value = value || this.value
    if (required && !value) {
      this.setState({ error: 'Select a valid option', invalid: true })
      return false
    } else {
      this.setState({ error: null, serverError: null, invalid: false })
      return true
    }
  }

  render() {
    const { children } = this.props
    const { error, serverError } = this.state
    return (
      <View error={error || serverError} inputProps={this.inputProps} options={children}>
        {this.label}
        {(error || serverError) && this.errorHTML}
      </View>
    )
  }
}
