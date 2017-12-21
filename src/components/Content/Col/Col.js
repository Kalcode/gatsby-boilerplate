import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Col({ children, noPadding, order, relative, size }) {
  let className = styles[size]
  if (noPadding) className += ' ' + styles.noPadding
  const style = {
    position: relative ? 'relative' : 'static',
    order,
  }
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

Col.propTypes = {
  children: PropTypes.any,
  noPadding: PropTypes.bool,
  order: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  relative: PropTypes.bool,
  size: PropTypes.oneOf(['half', 'one-third', 'two-third', 'full']),
}

Col.defaultProps = {
  order: 0,
  size: 'full',
}
