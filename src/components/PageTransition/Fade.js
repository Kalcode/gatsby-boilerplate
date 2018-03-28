import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

// required
export const timeout = 250

export default class Fade extends PureComponent {
  static propTypes = {
    timeout: PropTypes.number,
  }

  // Required
  onEntering = (node, isAppearing) => {
    TweenMax.set(this.node, { opacity: 1, display: 'block' })
  }

  // Required
  onEntered = (node, isAppearing) => {
    TweenMax.to(this.node, this.props.timeout / 1000, { opacity: 0, display: 'none' })
  }

  // Required
  onExiting = () => {
    TweenMax.fromTo(this.node, this.props.timeout / 1000,
      { opacity: 0, display: 'none' },
      { opacity: 1, display: 'block' }
    )
  }

  refNode = (c) => { this.node = c }

  render() {
    return (
      <div ref={this.refNode} className={styles.fade} />
    )
  }
}
