import React, { createElement, Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import CurrentTransition, { timeout } from './Fade'

const historyExitingEventType = `history::exiting`

/* globals window CustomEvent */
export const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } })
  window.dispatchEvent(event)
  setTimeout(() => {
    callback(true)
  }, timeout)
}

export default class PageTransition extends Component {
  static propTypes = {
    loader: PropTypes.any,
    location: PropTypes.any,
    pageResources: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = { exiting: false, nextPageResources: {} }
    this.listenerHandler = this.listenerHandler.bind(this)
  }

  listenerHandler(event) {
    if (this.props.location.pathname === event.detail.pathname) return false
    const nextPageResources = this.props.loader.getResourcesForPathname(
      event.detail.pathname,
      nextPageResources => this.setState({ nextPageResources })
    ) || {}
    this.setState({ exiting: true, nextPageResources })
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} })
    }
  }

  refNode = (c) => { this.node = c }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      onEntering: (node, isAppearing) => this.node.onEntering(node, isAppearing),
      onEntered: (node, isAppearing) => this.node.onEntered(node, isAppearing),
      onExiting: () => this.node.onExiting(),
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
    }
    return (
      <Transition {...transitionProps}>
        {
          (status) => {
            return ([
              createPortal(<CurrentTransition key='page-transition-portal' ref={this.refNode} timeout={timeout} />, document.body),
              createElement(this.props.pageResources.component, {
                ...this.props,
                ...this.props.pageResources.json,
                key: 'route-content',
              }),
            ])
          }
        }
      </Transition>
    )
  }
}
