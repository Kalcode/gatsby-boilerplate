import React from 'react'
import Helmet from 'components/Helmet'
import Link from 'components/Link'

export default function Home({ content: home }) {
  return (
    <main>
      <div className='row columns'>
        <Helmet
          title='Home Page | Gatsby Template'
          description='Home page of gatasby Template'
        />
        <h1>Home Page</h1>
        <p>Welcome to the test homepage</p>
        <p>Simple no?</p>
        <Link to='/about'>About</Link><br />
      </div>
    </main>
  )
}
