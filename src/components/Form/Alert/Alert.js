import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

if (typeof window !== 'undefined') {
  require('gsap/src/uncompressed/plugins/ScrollToPlugin')
}

export default class Alert extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  static padding = 40

  componentDidMount() {
    const { y } = this.container.getBoundingClientRect()
    const { screen, screenY } = window
    const { height } = screen
    if (y - Alert.padding < screenY || y + Alert.padding > screenY + height) {
      TweenLite.to(window, 2, { scrollTo: y, ease: Power2.easeOut })
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.container} ref={c => { this.container = c }}>
        An Error has Occured: <br />
        <span dangerouslySetInnerHTML={{ __html: ` (${children})` }} />
      </div>
    )
  }
}
