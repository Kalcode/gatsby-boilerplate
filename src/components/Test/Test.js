import React from 'react'

import styles from './styles.module.scss'
import testImage from './test-image.png'

export default function Test(props) {
  return (
    <div className={styles.hello}>
      HELLO WORLD!!
      <img src={testImage} />
    </div>
  )
}
