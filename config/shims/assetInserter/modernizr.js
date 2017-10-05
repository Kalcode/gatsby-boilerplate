import React from 'react'
import custom from './modernizr-custom'

export default function modernizr() {
  return ([
    <script dangerouslySetInnerHTML={{__html: custom}} />,
  ])
}
