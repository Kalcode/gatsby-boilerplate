import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Swipe({ refAnim }) {
  return (
    <div ref={refAnim} className={styles.cover} />
  )
}

Swipe.propTypes = {
  refAnim: PropTypes.func,
}
