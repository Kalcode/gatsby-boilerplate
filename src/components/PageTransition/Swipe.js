import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

// required
export const timeout = 250

export default class Swipe extends PureComponent {
  static propTypes = {
    timeout: PropTypes.number,
  }

  // Required
  onEntering = () => {
    TweenMax.set(this.node, { x: '100%' })
  }

  // Required
  onEntered = () => {
    TweenMax.to(this.node, this.props.timeout / 1000, { x: '200%' })
  }

  // Required
  onExiting = () => {
    TweenMax.fromTo(this.node, this.props.timeout / 1000, { x: '0%' }, { x: '100%' })
  }

  refNode = (c) => { this.node = c }

  render() {
    return (
      <div ref={this.refNode} className={styles.cover} />
    )
  }
}
