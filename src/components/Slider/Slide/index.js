import React, { cloneElement, Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import cn from 'classnames'

export default class Slide extends Component {
  static propTypes = {
    children: PropTypes.element,
    current: PropTypes.number,
    direction: PropTypes.string,
    index: PropTypes.number,
    position: PropTypes.string,
    set: PropTypes.func,
  }

  static transitions = {
    prev: '0%',
    current: '0%',
    next: '-100%',
  }

  componentDidMount() {
    if (this.props.current === this.props.index) this.onEntering('next')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.current !== this.props.current) {
      if (this.props.current === this.props.index) this.onEntering()
      else if (prevProps.current === this.props.index) this.onLeaving()
    }
  }

  onEntering = (direction) => {
    // this.unPeek()
    direction = direction || this.getDirection()
    console.log('entering', this.props.index, direction)
    if (this.childRef && this.childRef.onEntering) this.childRef.onEntering(direction)
    if (direction === 'next') {
      TweenMax.fromTo(this.node, 0.5, { y: '-100%' }, { y: '0%' })
    } else {
      TweenMax.set(this.node, { y: '0' })
    }
  }

  onLeaving = () => {
    // this.unPeek()
    const direction = this.getDirection()
    console.log('exiting', this.props.index, direction)
    if (this.childRef && this.childRef.onLeaving) this.childRef.onLeaving(direction)
    if (direction === 'next') {
      TweenMax.set(this.node, { y: '0' })
    } else {
      TweenMax.fromTo(this.node, 0.5, { y: '0%' }, { y: '-100%' })
    }
  }

  getDirection() {
    return this.props.direction
  }

  get children() {
    return cloneElement(this.props.children, { ref: (c) => { this.childRef = c } })
  }

  peekPrev = () => {
    TweenLite.to(this.container, 0.25, { y: '-25%' })
  }

  peekNext = () => {
    const nextElementSibling = this.node.nextElementSibling
    TweenLite.to(nextElementSibling, 0.25, { y: '-75%' })
  }

  unPeek = () => {
    const nextElementSibling = this.node.nextElementSibling
    if (nextElementSibling) {
      TweenLite.to(nextElementSibling, 0.25, { y: '-100%' })
    }
    TweenLite.to(this.container, 0.25, { y: '0%' })
  }

  render() {
    const { color, current, index, position, set } = this.props
    const style = {
      pointerEvents: current === index ? 'auto' : 'none',
      transform: `translateY(${Slide.transitions[position]})`,
      zIndex: position === 'next' ? 1 : 0,
    }
    return (
      <div className={styles.wrapper} style={style} ref={c => { this.node = c }}>
        <div className={cn(styles.container, styles[color])} ref={c => { this.container = c }}>
          <div>
            {this.children}
            <div>
              <button onClick={() => { set('prev') }}>prev</button>
              <button onClick={() => { set('next') }}>next</button>
            </div>
            <div>
              <button onClick={this.peekPrev}>peek prev</button>
              <button onClick={this.peekNext}>peek next</button>
              <button onClick={this.unPeek}>unpeek</button>
            </div>
          </div>
        </div>
        <div className={styles.peekPrev} onMouseEnter={this.peekNext} onMouseLeave={this.unPeek} />
        <div className={styles.peekNext} onMouseEnter={this.peekPrev} onMouseLeave={this.unPeek} />
      </div>
    )
  }
}
