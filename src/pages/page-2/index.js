import React from 'react'
import Link from 'components/Link'

import content from 'content/page-2.json'

export default function Page2(props) {
  return (
    <main>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
      <Link to={content.cta.to}>{content.cta.text}</Link>
      <div style={{ marginTop: '2000px' }}>
        <div>{content.outro}</div>
      </div>
    </main>
  )
}
