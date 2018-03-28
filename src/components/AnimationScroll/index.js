import React, { Children, Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Scene } from 'scrollmagic'
import PropTypes from 'prop-types'
import * as animations from './animations'

/* eslint-disable react/no-find-dom-node */

export default class AnimationScroll extends Component {
  static propTypes = {
    children: PropTypes.node,
    duration: PropTypes.number,
    delay: PropTypes.number,
    types: PropTypes.string,
  }

  static defaultProps = {
    duration: 0.5,
    delay: 0,
    types: 'fadeIn',
  }

  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  static count = 0;

  animRefs = []
  scenes = []

  componentWillMount() {
    AnimationScroll.count++
    this.count = AnimationScroll.count
  }

  componentDidMount() {
    const { duration } = this.props
    const types = this.props.types.replace(/ /g, '').split(',')

    this.animRefs.forEach((ref, index) => {
      const node = findDOMNode(ref)
      const delay = window.innerWidth < 640 ? 0 : this.props.delay
      const type = types[index] || types[types.length - 1]
      const animation = TweenMax.fromTo(node, duration,
        animations[type].from,
        animations[type].to,
      ).pause().delay(delay * index)

      const scene = new Scene({
        triggerElement: node,
        triggerHook: 0.6,
      })
      const indicatorName = 'Scrollanimation ' + this.count + '.' + index
      scene.on('enter', () => animation.play())

      if (process.env.NODE_ENV === 'development') {
        scene.addIndicators({ name: indicatorName })
      }

      scene.addTo(this.context.scrollmagic)
      this.scenes.push(scene)
    })
  }

  componentWillUnmount() {
    AnimationScroll.count--
    this.scenes.forEach(scene => { scene.destroy() })
  }

  get children() {
    return Children.map(this.props.children, (child, key) => {
      return <RefWrapper key={key} ref={c => { this.animRefs.push(c) }}>{child}</RefWrapper>
    })
  }

  render() {
    return this.children
  }
}

class RefWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return this.props.children
  }
}
