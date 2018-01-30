import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import styles from './styles.module.scss'

export default class ScrollMagicExample extends PureComponent {
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    // How to retrieve variables from scss in Javascript
    console.log(styles['break-medium'])
    console.log(styles['break-large'])
    console.log(styles['break-xlarge'])
    console.log(styles['nav-menu-break'])

    this.animation = new TimelineMax({ paused: true })
      .fromTo(this.node, 5, { opacity: 0 }, { opacity: 1 })
    this.animation.play()

    this.scrollAnim = new TimelineMax({ paused: true })
      .fromTo(this.title, 5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

    this.scene = new Scene({ triggerElement: this.title, triggerHook: 0.4 })
    this.scene.indicatorName = 'Test'
    this.scene.on('enter', () => this.scrollAnim.play())

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)
  }

  // Binding
  refNode = (c) => {
    this.node = c
  }

  refTitle= (c) => {
    this.title = c
  }

  render() {
    const { children } = this.props
    return (
      <div ref={this.refNode} className={styles.text}>
        {children}
        <div style={{ marginTop: 300, height: 3000 }} ref={this.refTitle}>
          <h1>HELLLO SCROLLMAGIC!</h1>
        </div>
      </div>
    )
  }
}
