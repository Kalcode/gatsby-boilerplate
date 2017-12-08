import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export default class TextInput extends Component {
  static propTypes = {
    store: PropTypes.object,
    formId: PropTypes.string,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    set: PropTypes.func,
    value: PropTypes.string,
  }

  get isInput() { return true }

  getValue() {
    const { formId, store, id } = this.props
    if (store[formId] && store[formId].fields[id]) {
      return store[formId].fields[id]
    } else {
      return ''
    }
  }

  onChange = (event) => {
    const { formId, id } = this.props
    const value = event.target.value
    this.props.set(formId, id, value)
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
            onChange={this.onChange}
            value={this.getValue()}
          />
        </label>
      </div>
    )
  }
}
