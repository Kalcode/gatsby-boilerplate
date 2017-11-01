import React, { PureComponent } from 'react'
import Link from 'components/Link'
import PropTypes from 'prop-types'

export default class Page2 extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  state = {
    data: null,
    error: null,
  }

  componentWillMount() {
    const api = 'http://45.76.57.232/wp-json/wp/v2/resource'
    fetch(api)
    .then(response => response.json())
    .then(json => this.setState({ data: json }))
    .catch(error => this.setState({ error }))
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to='/'>Go back to the homepage</Link>
        <pre>
          {this.state.data && this.state.data.map((item, index) => {
            return (
              <div key={item.id}>
                <h4>{item.company}</h4>
                <div>{item.address}</div>
                <div>{`${item.city}, ${item.state} ${item.zipcode}`}</div>
                <div>{item.phone}</div>
                <div><a href={`mailto:${item.email}`}>{item.email}</a></div>
                <div><a href={item.website} target='_blank'>{item.website}</a></div>
              </div>
            )
          })}
        </pre>
      </div>
    )
  }
}
