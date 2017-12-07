import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Bar from './Bar'
import Menu from './Menu'

import styles from './styles.module.scss'

export default class Nav extends Component {
  static propTypes = {
    location: PropTypes.object,
  }

  state = {
    opened: false,
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onScroll)
    window.addEventListener('touchmove', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.onScroll)
    window.removeEventListener('touchmove', this.onScroll)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setState({ opened: false })
    }
  }

  onScroll = (event) => {
    if (this.state.opened) {
      event.preventDefault()
      return false
    }
  }

  toggle = () => {
    const opened = !this.state.opened
    this.setState({ opened })
  }

  render() {
    return (
      <nav className={styles.nav}>
        <Bar opened={this.state.opened} toggle={this.toggle} />
        <Menu opened={this.state.opened}>
          {[
            { text: 'Home', to: '/' },
            { text: 'About', to: '/about' },
            { text: 'Page 2', to: '/page-2' },
          ]}
        </Menu>
      </nav>
    )
  }
}
