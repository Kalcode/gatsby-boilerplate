import React, { Children, cloneElement, Component } from 'react'
import PropTypes from 'prop-types'

import Alert from './Alert'
import Submitted from './Submitted'

import { includes } from 'lodash'

export default class Form extends Component {
  static propTypes = {
    action: PropTypes.any,
    children: PropTypes.any,
    honeypotted: PropTypes.func,
    id: PropTypes.string,
    register: PropTypes.func,
    store: PropTypes.object,
    submit: PropTypes.func,
    submittedElement: PropTypes.any,
  }

  state = {
    exited: this.props.store[this.props.id] && this.props.store[this.props.id].submitted,
  }

  componentDidMount() {
    this.props.register(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    const form = nextProps.store[nextProps.id]
    if (form && form.submitted && !this.state.exited) {
      this.exitAnimation()
    }
  }

  exitAnimation() {
    TweenMax.to(this.form, 0.5, {
      opacity: 0,
      delay: 1,
      onComplete: () => {
        this.setState({ exited: true })
      },
    })
  }

  inputs = []
  static htmlTags =['input', 'div', 'h1', 'h2', 'h3', 'p', 'ul']

  onSubmit = (event) => {
    event.preventDefault()
    if (this.honeypot.value) {
      this.props.honeypotted(this.props.id)
      return false
    }
    let valid = true
    this.inputs.forEach(input => {
      if (!input.isValid()) valid = false
    })
    if (valid) {
      if (this.props.action) this.form.submit()
      else this.props.submit(this.props.id, this.props.store[this.props.id])
    }
  }

  get children() {
    const { children, id } = this.props
    return Children.map(children, (child, key) => {
      if (Form.htmlTags.indexOf(child.type) > -1) return child
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
    const { id, store, submittedElement } = this.props
    const { exited } = this.state
    return (
      <div>
        {store[id] && store[id].error && <Alert>{store[id].error.ErrorText}</Alert>}
        {!exited && <form
          acceptCharset='UTF-8'
          action={this.props.action}
          encType='multipart/form-data'
          id={this.props.id}
          method='post'
          name={this.props.id}
          noValidate
          onSubmit={this.onSubmit}
          ref={c => { this.form = c }}
        >
          {this.children}
          <input
            ref={c => { this.honeypot = c }}
            size='25'
            style={{ display: 'none' }}
            type='text'
          />
        </form>}
        {exited && submittedElement && <Submitted>{submittedElement}</Submitted>}
      </div>
    )
  }
}
