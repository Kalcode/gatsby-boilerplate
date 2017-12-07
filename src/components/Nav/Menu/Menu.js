import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'
import styles from './styles.module.scss'

export default class Menu extends PureComponent {
  static propTypes = {
    children: PropTypes.array,
    opened: PropTypes.bool,
  }

  links = []

  componentDidMount() {
    this.createAnimation()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.opened !== this.props.opened) {
      this.props.opened ? this.open() : this.close()
    }
  }

  createAnimation() {
    if (this.animaton) this.animaton.kill()
    this.links = this.list.children
    this.animaton = new TimelineMax({ paused: true })
    .fromTo(this.menu, 0.25, { x: '100%' }, { x: '0%' })
    .staggerFromTo(this.links, 0.25, { opacity: 0 }, { opacity: 1, ease: Power2.easeIn }, 0.15)
  }

  open() {
    this.animaton.timeScale(1).play()
  }

  close() {
    this.animaton.timeScale(3).reverse()
  }

  refName(name) {
    return (c) => { this[name] = c }
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.container} ref={this.refName('menu')}>
        <div className={styles.content}>
          <div className={styles.list} ref={this.refName('list')}>
            {children.map((item, index) => {
              return (
                <Link key={index} className={styles.link} to={item.to}>
                  {item.text}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
