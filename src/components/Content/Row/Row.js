import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Row({ children, relative }) {
  const style = {
    position: relative ? 'relative' : 'static',
    zIndex: 0,
  }
  return (
    <div className={styles.row} style={style}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.any,
  relative: PropTypes.bool,
}
