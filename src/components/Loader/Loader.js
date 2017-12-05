import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const TIMEOUT = 0.25

export default class Loader extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  state = {
    loaded: false,
  }

  componentDidMount() {
    TweenMax.to(this.node, TIMEOUT, { opacity: 0,
      onComplete: () => {
        this.setState({ loaded: true })
      },
    })
  }

  render() {
    if (this.state.loaded) return false
    return (
      <div className={styles.wrapper} ref={c => { this.node = c }}>
        <div className={styles.container}>
          <div className={styles.loadText}>
            <div className={styles.letter}>G</div>
            <div className={styles.letter}>N</div>
            <div className={styles.letter}>I</div>
            <div className={styles.letter}>D</div>
            <div className={styles.letter}>A</div>
            <div className={styles.letter}>O</div>
            <div className={styles.letter}>L</div>
          </div>
        </div>
      </div>
    )
  }
}
