import React, { cloneElement, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    opened: PropTypes.bool,
    controlled: PropTypes.bool,
    index: PropTypes.any,
    toggle: PropTypes.func,
  }

  state = {
    opened: this.props.opened,
  }

  componentDidMount() {
    this.animation = new TimelineMax({ paused: true })
    .from(this.node, 0.25, { height: 0, clearProps: 'height' })

    if (this.state.opened) setTimeout(() => { this.animation.play() }, 5)
  }

  toggle = () => {
    if (this.props.controlled) this.props.toggle(this.props.index)
    else this.setState({ opened: !this.state.opened })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.controlled && prevState.opened !== this.state.opened) {
      this.state.opened ? this.animation.play() : this.animation.reverse()
    }

    if (this.props.controlled && prevProps.opened !== this.props.opened) {
      this.props.opened ? this.animation.play() : this.animation.reverse()
    }
  }

  get opened() {
    return this.props.opened || this.state.opened
  }

  render() {
    const { children } = this.props
    const opened = this.opened
    return (
      <div className={styles.wrapper}>
        <div>
          {cloneElement(children[0], { toggle: this.toggle, opened })}
        </div>
        <div ref={c => { this.node = c }} style={{ overflow: 'hidden' }}>
          {children[1]}
        </div>
      </div>
    )
  }
}
