var path = require('path')

function shim(name) {
  return path.resolve(__dirname, 'config', 'shims', name)
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        TweenLite: 'gsap',
        scrollmagic: shim('scrollmagic'),
        ScrollMagic: shim('scrollmagic'),
      },
    },
  })

  return config
}
