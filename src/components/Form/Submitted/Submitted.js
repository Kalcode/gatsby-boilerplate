import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Submitted extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    TweenMax.fromTo(this.container, 0.5, { opacity: 0 }, { opacity: 1 })
  }

  render() {
    const { children } = this.props
    const Comp = children
    return (
      <div ref={c => { this.container = c }}>
        <Comp />
      </div>
    )
  }
}
