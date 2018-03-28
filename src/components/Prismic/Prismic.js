import { Component } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

export default class Prismic extends Component {
  static propTypes = {
    data: PropTypes.array,
    dataRef: PropTypes.string,
    fetch: PropTypes.func,
    fetchRef: PropTypes.func,
    location: PropTypes.object,
    page: PropTypes.number,
    total_pages: PropTypes.number,
  }

  state = {
    preview: false,
  }

  componentDidMount() {
    if (this.props.location.pathname.includes('/preview')) {
      this.props.fetchRef(this.previewRef)
    } else if (!this.props.data) this.props.fetchRef()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dataRef !== this.props.dataRef) {
      this.props.fetch()
    } else if (this.props.page < this.props.total_pages) {
      this.props.fetch(this.props.page + 1)
    }
  }

  get previewRef() {
    const parsed = queryString.parse(this.props.location.search)
    return parsed.token
  }

  render() {
    return false
  }
}
