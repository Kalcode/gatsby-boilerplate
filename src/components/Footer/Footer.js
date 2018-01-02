import React from 'react'

import content from 'content/footer.json'

export default function Footer() {
  return (
    <footer>
      <h2 style={{ textAlign: 'center' }}>{content.content}</h2>
    </footer>
  )
}
