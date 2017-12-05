import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BaseHelmet } from 'components/Helmet'
import ScrollMagicContext from 'components/ScrollMagicContext'
import Loader from 'components/Loader'

import 'gsap'
import 'whatwg-fetch'
import 'scrollmagic'

if (typeof window !== 'undefined') {
  require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
}

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
  }

  render() {
    const { children, location } = this.props
    return (
      <ScrollMagicContext location={location}>
        <div>
          <Loader />
          <BaseHelmet location={location} />
          {children}
        </div>
      </ScrollMagicContext>
    )
  }
}
