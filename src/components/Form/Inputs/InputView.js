import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function InputView({ children, error, inputProps, width }) {
  return (
    <div className={styles.wrapper} style={{ width }}>
      <div className={styles.container}>
        <label htmlFor={inputProps.id} className={error ? styles.labelInvalid : styles.label}>
          {children}
          <input
            className={styles.input}
            type='text'
            {...inputProps}
          />
        </label>
      </div>
    </div>
  )
}

InputView.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
