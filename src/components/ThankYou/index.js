import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default class Submitted extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <h2>Thank You</h2>
        <p>Form has been submitted successfully, we usually reach out to comments and request within 48-72 hours.</p>
      </div>
    )
  }
}
