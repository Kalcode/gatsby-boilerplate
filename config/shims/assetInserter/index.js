import modernizr from './modernizr'
import typekit from './typekit'
import schema from './schema'

export default class assetInserter {
  static head() {
    return [
      modernizr(),
    ]
  }

  static body() {
    return [
      typekit(),
      schema(),
    ]
  }
}
