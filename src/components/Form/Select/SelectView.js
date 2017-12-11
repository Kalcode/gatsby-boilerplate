import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Inputs/styles.module.scss'

export default function SelectView({ children, error, inputProps, options }) {
  return (
    <div className={styles.container}>
      <label htmlFor={inputProps.id} className={error ? styles.labelInvalid : styles.label}>
        {children}
        <select
          className={styles.input}
          {...inputProps}
        >
          <option value='' disabled defaultValue>Choose your option</option>
          {options}
        </select>
      </label>
    </div>
  )
}

SelectView.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
  options: PropTypes.any,
}
