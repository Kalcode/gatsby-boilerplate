import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Submit extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    const { children } = this.props
    return (
      <input type='submit' value={children} />
    )
  }
}
