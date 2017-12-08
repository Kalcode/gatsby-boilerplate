import React, { Children, cloneElement, Component } from 'react'
import PropTypes from 'prop-types'
import { includes } from 'lodash'

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    register: PropTypes.func,
  }

  componentDidMount() {
    this.props.register(this.props.id)
  }

  inputs = []

  onSubmit = (event) => {
    event.preventDefault()
  }

  get children() {
    const { children, id } = this.props
    return Children.map(children, (child, key) => {
      return cloneElement(child, { formId: id, key, ref: this.refInputs })
    })
  }

  refInputs = (c) => {
    if (c.isInput && !includes(this.inputs, c)) this.inputs.push(c)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.children}
      </form>
    )
  }
}
