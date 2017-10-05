import React from 'react'
import modernizr from './modernizr'
import typekit from './typekit'

export default class assetInserter {
  static head() {
    return [
      modernizr(),
    ]
  }

  static body() {
    return [
      typekit(),
    ]
  }
}
