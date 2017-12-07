import React from 'react'
import PropTypes from 'prop-types'

export default function AboutPage(props) {
  return (
    <div className='row'>
      <div className='small-6 columns'>
        About Us
      </div>
    </div>
  )
}

AboutPage.propTypes = {
  children: PropTypes.any,
}
