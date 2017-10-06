import PropTypes from 'prop-types'
import React from 'react'

import App from 'components/App'

import './base.scss'

const Alternate = ({ children, location }) => (
  <App location={location}>
    {children()}
  </App>
)

Alternate.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
}

export default Alternate
