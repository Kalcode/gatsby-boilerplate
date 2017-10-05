import React from 'react'
import config from 'config'

export default function typekit() {
  if (!config.typekit) return null
  return ([
    <script src={`https://use.typekit.net/${config.typekit}.js`} />,
    <script dangerouslySetInnerHTML={{__html: 'try{Typekit.load({ async: true });}catch(e){}'}} />,
  ])
}
