import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Content(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any,
}
