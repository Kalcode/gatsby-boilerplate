import React from 'react'
import PropTypes from 'prop-types'
import AutoTextArea from 'react-textarea-autosize'
import styles from '../Inputs/styles.module.scss'

export default function TextAreaView({ children, error, inputProps }) {
  return (
    <div className={styles.container}>
      <label htmlFor={inputProps.id} className={error ? styles.labelInvalid : styles.label}>
        {children}
        <AutoTextArea
          className={styles.input}
          minRows={3}
          type='text'
          {...inputProps}
        />
      </label>
    </div>
  )
}

TextAreaView.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
}
