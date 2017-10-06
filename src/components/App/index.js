import PropTypes from 'prop-types'
import React from 'react'
import { BaseHelmet } from 'components/Helmet'
import ScrollMagicContext from 'components/ScrollMagicContext'
import 'gsap'
import 'scrollmagic'
if (typeof window !== 'undefined') {
  require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
}

const App = ({ children, location }) => (
  <ScrollMagicContext location={location}>
    <div>
      <BaseHelmet location={location} />
      {children}
    </div>
  </ScrollMagicContext>
)

App.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default App
