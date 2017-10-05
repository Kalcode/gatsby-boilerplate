import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactHelmet from 'react-helmet'

export default class Helmet extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  render() {
    const { title, description } = this
    return (
      <ReactHelmet
        title={title}
        meta={[
          {'name': 'description', 'content': description},
          { name: 'og:title', content: title },
          { name: 'og:description', content: description },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
        ]}
      />
    )
  }
}
