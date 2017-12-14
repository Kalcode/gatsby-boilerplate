import React from 'react'
import Helmet from 'components/Helmet'
import Link from 'components/Link'

import content from 'content/home.json'

export default function Home({ content: home }) {
  return (
    <main>
      <div className='row columns'>
        <Helmet
          title={content.meta_title}
          description={content.meta_description}
        />
        <h1>{content.title}</h1>
        <p>{content.content[0]}</p>
        <p>{content.content[1]}</p>
        <Link to='/page-2/'>Go to page 2</Link><br />
        <Link to='/landing-page/'>Landing Page</Link>
      </div>
    </main>
  )
}
