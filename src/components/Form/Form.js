import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { children } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        {children}
      </form>
    )
  }
}
