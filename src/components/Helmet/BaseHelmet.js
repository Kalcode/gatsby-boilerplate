import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from 'config'

export default class BaseHelmet extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
  }

  get url() {
    return `${config.url}${this.props.location.pathname}`
  }

  get title() {
    return config.meta_title
  }

  get description() {
    return config.meta_description
  }

  render() {
    const { title, description } = this
    return (
      <Helmet
        htmlAttributes={{'lang': 'en'}}
        title={title}
        meta={[
          {'name': 'description', 'content': description},
          { name: 'og:title', content: title },
          { name: 'og:description', content: description },
          { name: 'og:url', content: this.url },
          { name: 'og:site_name', content: config.name },
          { name: 'og:type', content: 'website' },
          { name: 'og:local', content: 'en_US' },
          { name: 'og:image', content: config.logo },

          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:domain', content: config.url },
          { name: 'twitter:image', content: config.logo },

          { name: 'msapplication-TileColor', content: '#fff' },
          { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
        ]}
        link={[
          {'rel': 'canonical', 'href': this.url},

          { rel: 'shortcut icon', href: '/favicons/favicon.ico', type: 'image/x-icon' },
          { rel: 'icon', href: '/favicons/favicon.ico', type: 'image/x-icon' },

          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },

          { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },

          { rel: 'icon', type: 'image/png', sizes: '228x228', href: '/favicons/coast-228x228.png' },

          { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png' },
          { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png' },
          { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png' },
          { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png' },
          { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png' },
          { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png' },
          { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png' },
          { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon-180x180.png' },
        ]}
      />
    )
  }
}
