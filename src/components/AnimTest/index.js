import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import scrollmagic from 'utils/scrollmagic'
import { Scene } from 'scrollmagic'

@scrollmagic
export default class AnimTest extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    this.animation = new TimelineMax({ paused: true })
    .fromTo(this.node, 5, { opacity: 0 }, { opacity: 1 })
    this.animation.play()

    this.scrollAnim = new TimelineMax({ paused: true })
    .fromTo(this.title, 5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

    this.scene = new Scene({ triggerElement: this.title, triggerHook: 0.4 })
    this.scene.indicatorName = 'Test'
    this.scene.on('enter', () => this.scrollAnim.play())
  }

  refNode = (c) => {
    this.node = c
  }

  refTitle= (c) => {
    this.title = c
  }

  render() {
    const { children } = this.props
    return (
      <div ref={this.refNode}>
        {children}
        <div style={{ marginTop: 300, height: 3000 }} ref={this.refTitle}>
          <h1>HELLLO SCROLLMAGIC!</h1>
        </div>
      </div>
    )
  }
}
