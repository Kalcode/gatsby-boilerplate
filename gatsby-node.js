var path = require('path')

function shim(name) {
  return path.resolve(__dirname, 'config', 'shims', name)
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        analytics: shim('analytics'),
        assetInserter: shim('assetInserter'),
        TweenLite: 'gsap',
        scrollmagic: shim('scrollmagic'),
        ScrollMagic: shim('scrollmagic'),
      },
    },
  })

  return config
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/alternate-layout/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = 'alternate'
      // Update the page.
      createPage(page)
    }

    resolve()
  })
}
