import React from 'react'
import Link from 'gatsby-link'
import Test from 'components/Test'

const IndexPage = () => (
  <div className='test'>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>Go to page 2</Link>
    <Test />
  </div>
)

export default IndexPage
