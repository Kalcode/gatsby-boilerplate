import React from 'react'
import PropTypes from 'prop-types'
import baseStyles from '../Inputs/styles.module.scss'
import styles from './styles.module.scss'

export default function SelectView({ children, error, inputProps, options, width }) {
  return (
    <div className={baseStyles.wrapper} style={{ width }}>
      <div className={baseStyles.container}>
        <label htmlFor={inputProps.id} className={error ? baseStyles.labelInvalid : baseStyles.label}>
          {children}
          <select
            className={[baseStyles.input, styles.select].join(' ')}
            size={inputProps.multiple && options.length}
            {...inputProps}
          >
            {!inputProps.multiple && <option value='' disabled defaultValue>Choose your option</option>}
            {options}
          </select>
        </label>
      </div>
    </div>
  )
}

SelectView.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
  inputProps: PropTypes.object.isRequired,
  options: PropTypes.any,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
