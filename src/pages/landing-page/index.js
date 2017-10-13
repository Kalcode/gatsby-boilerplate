import React from 'react'
import PropTypes from 'prop-types'
import ExampleComp from 'components/ExampleComp'

export default function LandingPage(props) {
  return (
    <div>
      <h2>Alternate Template Test!</h2>
      <ExampleComp />
    </div>
  )
}

LandingPage.propTypes = {
  children: PropTypes.any,
}
