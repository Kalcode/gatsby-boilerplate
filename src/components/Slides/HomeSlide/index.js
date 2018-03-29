import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

export default class HomeSlide extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    set: PropTypes.func,
  }

  componentDidMount() {

  }

  onEntering = (direction, timeout) => {
    const y = direction === 'next' ? '-100%' : '100%'
    console.log(direction)

    TweenMax.fromTo(this.node, 1, { opacity: 0, y }, { opacity: 1, y: '0%', delay: 0.5 })
  }

  onLeaving = (direction, timeout) => {
    TweenMax.fromTo(this.node, 1, { y: '0%', opacity: 1 }, { y: '100%', opacity: 0 })
  }

  render() {
    const { children, color, set } = this.props
    return (
      <div className={cn(styles.wrapper, styles[color])}>
        <div ref={c => { this.node = c }}>
          {children}
          <div>
            <button onClick={() => { set('prev') }}>prev</button>
            <button onClick={() => { set('next') }}>next</button>
          </div>
        </div>
      </div>
    )
  }
}
