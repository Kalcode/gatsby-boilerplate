import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'

class BlogPosts extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  componentDidMount() {

  }

  get posts() {
    if (!this.props.data) return false
    let blogPosts = this.props.data.filter(item => item.type === 'blog_post')
    return blogPosts.map((item, key) => {
      return (
        <div key={key}>
          {item.data.image.url && <img src={item.data.image.url} />}
          <h2>{RichText.render(item.data.title)}</h2>
          {RichText.render(item.data.content)}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.posts}
      </div>
    )
  }
}

const mapStatToProps = ({ prismic }) => ({ data: prismic.data })

export default connect(mapStatToProps, null)(BlogPosts)
