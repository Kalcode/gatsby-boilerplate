import React from 'react'
import PropTypes from 'prop-types'
import baseStyles from '../Inputs/styles.module.scss'
import styles from './styles.module.scss'

export default function CheckboxesView({ checkboxes, children, error, inputProps, getValue }) {
  return (
    <div className={baseStyles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={error ? baseStyles.labelInvalid : baseStyles.label}>{children}</legend>
        {checkboxes.map((item) => (
          [
            <input type='checkbox' id={item.id} name={item.id} checked={!!getValue(item.id)} value={item.value} key={item.id} required={item.required} {...inputProps} />,
            <label className={styles.label} htmlFor={item.id} key={item.id + '-label'}>{item.label || item.value}</label>,
          ]
        ))}
      </fieldset>
    </div>
  )
}

CheckboxesView.propTypes = {
  children: PropTypes.any,
  checkboxes: PropTypes.array.isRequired,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
  getValue: PropTypes.func.isRequired,
}
