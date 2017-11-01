import React, { Component } from 'react'
import GatsbyLink from 'gatsby-link'

import PropTypes from 'prop-types'

/**
 * A <Link /> is used an enhanced React Router Link. This Component
 * will render a plain anchor tag when the Link is external. This
 * Link will also prefetch anything in getComponent for a given route.
 * This provides a smoother experience for the user.
 *
 */
export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  }

  render() {
    const { children, ...rest } = this.props
    return (
      <GatsbyLink {...rest}>{children}</GatsbyLink>
    )
  }
}
