import Submit from './Submit'

import { connect } from 'react-redux'

function mapStateToProps({ forms }) {
  return {
    store: forms,
  }
}

export default connect(mapStateToProps, null, null, { withRef: true })(Submit)
