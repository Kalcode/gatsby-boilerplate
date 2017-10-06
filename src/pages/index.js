import React from 'react'
import Helmet from 'components/Helmet'
import PropTypes from 'prop-types'
import Link from 'components/Link'
import ExampleComp from 'components/ExampleComp'
import content from './content'

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
      <Link to='/page-2/'>Go to page 2</Link>
      <ExampleComp />
    </main>
  )
}

Home.propTypes = {
  children: PropTypes.any,
}
