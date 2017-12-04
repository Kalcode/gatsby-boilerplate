import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class About extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    const { children } = this.props
    return (
      <div>
        About Us
      </div>
    )
  }
}
