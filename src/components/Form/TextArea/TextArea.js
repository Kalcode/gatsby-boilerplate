import React from 'react'
import PropTypes from 'prop-types'
import InputBase from '../Inputs/Input'
import View from './TextAreaView'

export default class TextArea extends InputBase {
  static propTypes = {
    children: PropTypes.any,
    min: PropTypes.number,
  }

  static defaultProps = {
    min: 1,
    validator: 'textArea',
  }

  isValid = (value) => {
    const { min, required } = this.props
    if (!value) value = this.value
    if (required && value < this.props.min) {
      const error = min === 1 ? 'Cannot be empty' : `Must be at least ${min} characters. Currently Used: ${this.value.length}`
      this.setState({ error: error, invalid: true })
      return false
    } else {
      this.setState({ error: null, serverError: null, invalid: false })
      return true
    }
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
