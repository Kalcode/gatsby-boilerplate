import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default class Hamburger extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    opened: PropTypes.bool,
  }

  componentDidMount() {
    const timing = 0.15
    this.animation = new TimelineMax({ paused: true })
    .fromTo(this.top, timing, { y: 0 }, { y: 6 })
    .fromTo(this.bottom, timing, { y: 0 }, { y: -6 }, 0)
    .fromTo(this.middle, timing, { opacity: 1 }, { opacity: 0 }, 0)
    .fromTo(this.top, timing, { rotation: 0 }, { rotation: 45 }, timing)
    .fromTo(this.bottom, timing, { rotation: 0 }, { rotation: -45 }, timing)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.opened !== this.props.opened) {
      this.props.opened ? this.animation.play() : this.animation.reverse()
    }
  }

  refName(name) {
    return (c) => { this[name] = c }
  }

  render() {
    const { onClick } = this.props
    return (
      <button className={styles.container} onClick={onClick}>
        <div className={styles.burger}>
          <span className={styles.bar} ref={this.refName('top')} />
          <span className={styles.bar} ref={this.refName('middle')} />
          <span className={styles.bar} ref={this.refName('bottom')} />
        </div>
      </button>
    )
  }
}
