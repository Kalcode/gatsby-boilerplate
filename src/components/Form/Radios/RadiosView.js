import React from 'react'
import PropTypes from 'prop-types'
import baseStyles from '../Inputs/styles.module.scss'
import styles from './styles.module.scss'

export default function RadiosView({ radios, children, error, inputProps, value }) {
  return (
    <div className={baseStyles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={error ? baseStyles.labelInvalid : baseStyles.label}>{children}</legend>
        {radios.map((item, key) => (
          [
            <input type='radio' id={inputProps.name + key} checked={value === item.value} value={item.value} key={inputProps.name + key} required={item.required} {...inputProps} />,
            <label className={styles.label} htmlFor={inputProps.name + key} key={inputProps.name + key + '-label'}>{item.label || item.value}</label>,
          ]
        ))}
      </fieldset>
    </div>
  )
}

RadiosView.propTypes = {
  children: PropTypes.any,
  radios: PropTypes.array.isRequired,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
}
