import { Component } from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'scrollmagic'

export default class ScrollMagicContext extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.any,
  }

  state = { scrollmagic: new Controller() }

  static get childContextTypes() {
    return { scrollmagic: PropTypes.any }
  }

  getChildContext() {
    return { scrollmagic: this.state.scrollmagic }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.location.pathname === this.props.location.pathname) return
    this.resetController()
  }

  resetController() {
    this.state.scrollmagic.destroy()
    this.setState({ scrollmagic: new Controller() })
  }

  render() {
    return this.props.children
  }
}
