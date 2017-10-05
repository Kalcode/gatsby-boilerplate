if (typeof window === 'undefined') {
  console.log('No WINDOW');
  module.exports = {
    Controller: function() {},
    Scene: function() {},
  }
} else {
  console.log('Window');
  module.exports = require('../../node_modules/scrollmagic')
}
