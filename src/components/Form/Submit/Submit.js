import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Checkmark from './Checkmark'

import styles from './styles.module.scss'

export default class Submit extends Component {
  static propTypes = {
    children: PropTypes.any,
    formId: PropTypes.any,
    store: PropTypes.object,
  }

  get spinner() {
    return <div className={styles.spinner} />
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
          disabled={this.form && this.form.fetching}
          type='submit'
          value={children}
        />}
        {this.form && this.form.submitted && this.submitted}
        {this.form && this.form.fetching && this.spinner}
      </div>
    )
  }
}
