import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class About extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  state = {
    data: null,
    error: null,
  }

  componentWillMount() {
    const api = 'http://45.76.57.232/wp-json/wp/v2/pages?slug=about'
    fetch(api)
    .then(response => response.json())
    .then(json => this.setState({ data: json }))
    .catch(error => this.setState({ error }))
  }

  render() {
    const { children } = this.props
    const { data, error } = this.state
    if (error) return <div dangerouslySetInnerHTML={{ __html: error }} />
    return (
      <div>
        {data &&
          <div>
            <div>
              <img src={data[0].banner.guid} style={{ minHeight: '500px', width: '100%', objectFit: 'cover' }} />
            </div>
            <h2>{data[0].title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
          </div>
        }
      </div>
    )
  }
}
