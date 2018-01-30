import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import styles from './styles.module.scss'

export default class ScrollDown extends Component {
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  componentDidMount() {
    this.animation = new TimelineMax({ paused: true })
      .set(this.node, { css: { animation: 'none' } })
      .to(this.node, 2, { y: 60, opacity: 0 })

    this.scene = new Scene({ triggerElement: this.node, triggerHook: 0.7 })
    this.scene.indicatorName = 'ScrollDown'
    this.scene.on('enter', () => { this.animation.play() })

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.scrolldown} ref={c => { this.node = c }}>
          <p className={styles.scrollText}>Scroll Down</p>
          <svg className={styles.svg} viewBox='0 0 24 24'>
            <path d='M6 9l6 6 6-6' />
          </svg>
        </div>
      </div>
    )
  }
}
