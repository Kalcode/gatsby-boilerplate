import React from 'react'
import styles from './styles.module.scss'

import content from './footer.json'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <h2 style={{ textAlign: 'center' }}>{content.content}</h2>
    </footer>
  )
}
