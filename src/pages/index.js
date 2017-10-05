import React from 'react'
import Link from 'gatsby-link'
import AnimTest from 'components/AnimTest'

const IndexPage = () => (
  <div className='test'>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>Go to page 2</Link>
    <AnimTest>TESTING 2.0</AnimTest>
  </div>
)

export default IndexPage
