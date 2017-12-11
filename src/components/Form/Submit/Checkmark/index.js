import React from 'react'
import styles from './styles.module.scss'

export default function Checkmark(props) {
  return (
    <div className={styles.circle}>
      <div className={styles.background} />
      <div className={styles.checkmark} />
    </div>
  )
}
