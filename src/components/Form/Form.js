import React, { Children, cloneElement, Component } from 'react'
import PropTypes from 'prop-types'
import { includes } from 'lodash'

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    register: PropTypes.func,
    submit: PropTypes.func,
    store: PropTypes.object,
  }

  componentDidMount() {
    this.props.register(this.props.id)
  }

  inputs = []

  onSubmit = (event) => {
    event.preventDefault()
    let valid = true
    this.inputs.forEach(input => {
      if (!input.isValid()) valid = false
    })
    if (valid) this.props.submit(this.props.id, this.props.store[this.props.id])
  }

  get children() {
    const { children, id } = this.props
    return Children.map(children, (child, key) => {
      return cloneElement(child, { formId: id, key, ref: this.refInputs })
    })
  }

  refInputs = (c) => {
    if (c && c.getWrappedInstance) {
      const instance = c.getWrappedInstance()
      if (instance.isInput && !includes(this.inputs, instance)) this.inputs.push(instance)
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} noValidate>
        {this.children}
      </form>
    )
  }
}
