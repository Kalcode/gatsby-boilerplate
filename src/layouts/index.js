import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import ScrollMagicContext from 'components/ScrollMagicContext'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import 'gsap'
import 'scrollmagic'
if (typeof window !== 'undefined') {
  require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
}

import './base.scss'

const TemplateWrapper = ({ children, location }) => (
  <ScrollMagicContext location={location}>
    <div>
      <Helmet
        title='Gatsby Default Starter'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
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
