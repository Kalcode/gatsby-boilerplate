import React, { cloneElement, Children, Component } from 'react'
import PropTypes from 'prop-types'
import KeyHandler from './KeyHandler'
import MouseHandler from './MouseHandler'

import styles from './styles.module.scss'

export default class Slider extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  static timeout = 500

  state = {
    current: 0,
    direction: 'next',
    transitioning: false,
  }

  componentDidMount() {
    this.keyHandler = new KeyHandler(this)
    this.mouseHandler = new MouseHandler(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.current !== prevState.current && !this.state.transitioning) {
      this.onTransition()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    this.keyHandler.destroy()
    this.mouseHandler.destroy()
  }

  get children() {
    const { children } = this.props
    const { current } = this.state
    return Children.map(children, (child, index) => (
      cloneElement(child, { key: index, index, current })
    ))
  }

  getChild(position) {
    const { children } = this.props
    const { current, direction } = this.state
    const timeout = Slider.timeout
    const index = this[position]
    return cloneElement(children[index], { current, direction, index, key: index, position, set: this.setSlide, timeout })
  }

  onTransition() {
    this.setState({ transitioning: true })
    this.timer = setTimeout(this.onTimeout, Slider.timeout)
  }

  onTimeout = () => {
    this.setState({ transitioning: false })
  }

  get current() {
    return this.state.current
  }

  get next() {
    return (this.state.current + 1) % Children.count(this.props.children)
  }

  get prev() {
    return this.state.current - 1 < 0 ? Children.count(this.props.children) - 1 : this.state.current - 1
  }

  goTo = (index) => {
    if (index < 0 | index >= this.props.children.length) return
    if (this.state.transitioning) return
    let direction = 'next'
    if (index === this.prev) direction = 'prev'
    this.setState({ current: index, direction })
  }

  setSlide = (direction) => {
    if (this.state.transitioning) return
    this.setState({ current: this[direction], direction })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          {this.getChild('prev')}
          {this.getChild('current')}
          {this.getChild('next')}
        </div>
      </div>
    )
  }
}
