import Test from './Test'
import { connect } from 'react-redux'
import * as Actions from 'reducers/count'

function mapStateToProps({ count }) {
  return { count: count.total }
}

function mapDispatchToProps(dispatch) {
  return {
    set: (val) => dispatch(Actions.set(val)),
    add: () => dispatch(Actions.add()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
