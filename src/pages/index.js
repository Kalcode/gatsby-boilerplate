import React from 'react'
import Helmet from 'components/Helmet'
import PropTypes from 'prop-types'
import Link from 'components/Link'
import content from './content.json'

export default function Home(props) {
  return (
    <main>
      <Helmet
        title={content.meta_title}
        description={content.meta_description}
      />
      <h1>{content.title}</h1>
      <p>{content.content[0]}</p>
      <p>{content.content[1]}</p>
      <Link to='/page-2/'>Go to page 2</Link><br />
      <Link to='/landing-page/'>Landing Page</Link>
    </main>
  )
}

Home.propTypes = {
  children: PropTypes.any,
}
