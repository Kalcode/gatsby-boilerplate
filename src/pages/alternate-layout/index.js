import React from 'react'
import PropTypes from 'prop-types'
import ExampleComp from 'components/ExampleComp'

export default function LandingPage(props) {
  return (
    <main>
      <h2>Alternate Template Test!</h2>
      <ExampleComp />
    </main>
  )
}

LandingPage.propTypes = {
  children: PropTypes.any,
}
