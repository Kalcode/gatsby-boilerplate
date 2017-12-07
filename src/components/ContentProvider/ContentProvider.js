import React, { Children, cloneElement, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { merge, mergeWith } from 'lodash'

import content from 'content'

export default class ContentProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  state = {
    test: true,
  }

  default = 'en'
  english_keys = ['en', 'en-us', 'en-gb']

  componentWillMount() {
    this.locale = 'en'
  }

  componentWillUpdate(nextProps, nextState) {
    if (module.hot) {
      console.log('Updating content')
      this.updateContent()
    }
  }

  updateContent(predefined) {
    const locale = this.default
    this.mergedContent = {}
    merge(this.mergedContent, content[this.default])
    return mergeWith(this.mergedContent, content[locale], this.customizer)
  }

  customizer(objValue, srcValue) {
    if (Array.isArray(objValue)) {
      return srcValue
    }
  }

  get content() {
    if (!this.mergedContent) return this.updateContent()
    else return this.mergedContent
  }

  get children() {
    return Children.map(this.props.children, (child, key) => {
      return cloneElement(child, { key, content: this.content })
    })
  }

  render() {
    return (
      <div>
        {this.children}
      </div>
    )
  }
}
