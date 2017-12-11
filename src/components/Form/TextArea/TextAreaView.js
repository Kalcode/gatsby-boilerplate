import React from 'react'
import PropTypes from 'prop-types'
import AutoTextArea from 'react-textarea-autosize'
import styles from '../Inputs/styles.module.scss'

export default function TextArea({ children, error, inputProps }) {
  return (
    <div className={styles.container}>
      <label className={error ? styles.labelInvalid : styles.label}>
        {children}
        <AutoTextArea
          className={styles.input}
          minRows={3}
          {...inputProps}
        />
      </label>
    </div>
  )
}

TextArea.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
}
