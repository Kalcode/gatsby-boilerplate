import PropTypes from 'prop-types'
import React from 'react'

import Footer from 'components/Footer'
import { BaseHelmet } from 'components/Helmet'
import Nav from 'components/Nav'
import ScrollMagicContext from 'components/ScrollMagicContext'

import 'gsap'
import 'scrollmagic'
if (typeof window !== 'undefined') {
  require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
}

import './base.scss'

const TemplateWrapper = ({ children, location }) => (
  <ScrollMagicContext location={location}>
    <div>
      <BaseHelmet location={location} />
      <Nav />
      {children()}
      <Footer />
    </div>
  </ScrollMagicContext>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
}

export default TemplateWrapper
