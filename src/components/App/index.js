import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BaseHelmet } from 'components/Helmet'
import ScrollMagicContext from 'components/ScrollMagicContext'
import Prismic from 'components/Prismic'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
  }

  render() {
    const { children, location } = this.props
    return (
      <ScrollMagicContext location={location}>
        <Prismic location={location} />
        <BaseHelmet location={location} />
        {children}
      </ScrollMagicContext>
    )
  }
}
