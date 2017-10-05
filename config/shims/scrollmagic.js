if (typeof window === 'undefined') {
  module.exports = {
    Controller: function() {},
    Scene: function() {},
  }
} else {
  module.exports = require('../../node_modules/scrollmagic')
}
