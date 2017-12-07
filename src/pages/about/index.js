import React from 'react'
import PropTypes from 'prop-types'

export default function AboutPage(props) {
  return (
    <main className='row'>
      <div className='small-6 columns'>
        About Us
      </div>
    </main>
  )
}

AboutPage.propTypes = {
  children: PropTypes.any,
}
