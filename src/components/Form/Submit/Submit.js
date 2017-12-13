import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Checkmark from './Checkmark'
import Spinner from './Spinner'

import styles from './styles.module.scss'

export default class Submit extends Component {
  static propTypes = {
    children: PropTypes.any,
    formId: PropTypes.any,
    store: PropTypes.object,
  }

  get submitted() {
    return (
      <div>
        <Checkmark />
        Submitted
      </div>
    )
  }

  get form() {
    const form = this.props.store[this.props.formId]
    return form || {}
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.container}>
        {this.form && !this.form.submitted && <input
          className={styles.input}
          disabled={this.form && this.form.fetching}
          type='submit'
          value={children}
        />}
        {this.form && this.form.submitted && this.submitted}
        {this.form && this.form.fetching && <Spinner />}
      </div>
    )
  }
}
