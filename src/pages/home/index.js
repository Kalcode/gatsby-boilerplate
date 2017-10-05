import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import AnimTest from 'components/AnimTest'
import Test from 'components/Test'

export default function Home(props) {
  return (
    <div className='test'>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to='/page-2/'>Go to page 2</Link>
      <AnimTest>TESTING 2.0</AnimTest>
      <Test />
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.any,
}
