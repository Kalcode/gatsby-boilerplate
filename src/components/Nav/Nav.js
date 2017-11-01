import React from 'react'
import Link from 'components/Link'

export default function Nav() {
  return (
    <header>
      <h2>Templator</h2>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/page-2'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
