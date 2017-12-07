import Nav from './Nav'
import { connect } from 'react-redux'
import * as Actions from 'reducers/nav'

function mapStateToProps({ nav }) {
  return {
    opened: nav.opened,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => dispatch(Actions.toggle()),
    close: () => dispatch(Actions.close()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
