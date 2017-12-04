import React from 'react'
import custom from './modernizr-custom'

export default function modernizr() {
  return ([
    <script key='modernizr-script' dangerouslySetInnerHTML={{__html: custom}} />,
  ])
}
