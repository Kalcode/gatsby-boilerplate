import Prismic from './Prismic'
import { connect } from 'react-redux'
import * as Actions from 'reducers/prismic'

const mapStateToProps = ({ prismic }) => {
  return {
    data: prismic.data,
    dataRef: prismic.ref,
    page: prismic.page,
    total_pages: prismic.total_pages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => { dispatch(Actions.fetch(page)) },
    fetchRef: (ref) => { dispatch(Actions.fetchRef(ref)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prismic)
