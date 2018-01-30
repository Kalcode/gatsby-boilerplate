import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.scss'
import ScrollDown from './ScrollDown'

export default function Banner({ children, sizes }) {
  return (
    <div>
      <div className={styles.wrapper}>
        <Img
          className={styles.image}
          sizes={sizes}
          style={{ position: `absolute`, zIndex: '-1' }}
        />
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
      <ScrollDown />
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
  sizes: PropTypes.object,
}
