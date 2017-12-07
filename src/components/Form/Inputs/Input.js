import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export default class TextInput extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
  }

  state = {
    value: this.props.value || '',
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { label, placeholder } = this.props
    return (
      <div className={styles.container}>
        <label className={styles.label}>
          {label}
          <input
            className={styles.input}
            type='text'
            placeholder={placeholder}
          />
        </label>
      </div>
    )
  }
}
