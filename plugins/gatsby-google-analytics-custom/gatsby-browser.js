exports.onRouteUpdate = function({ location }) {
  var pathname = (location || {}).pathname
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof ga === `function`) {
    window.ga(`set`, `page`, pathname)
    window.ga(`send`, `pageview`)
  } else {
    console.log('[GA_VIEW] ', pathname)
  }
}
