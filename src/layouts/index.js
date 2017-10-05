import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ScrollMagicContext from 'components/ScrollMagicContext'
import 'gsap'
import 'scrollmagic'
if (typeof window !== 'undefined') {
  require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
}

import './base.scss'


const TemplateWrapper = ({ children }) => (
  <ScrollMagicContext>
    <div>
      <Helmet
        title='Gatsby Default Starter'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      {children()}
    </div>
  </ScrollMagicContext>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
