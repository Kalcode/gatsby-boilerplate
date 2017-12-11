import Select from './Select'
import { connect } from 'react-redux'
import * as Actions from 'reducers/forms'

function mapStateToProps({ forms }) {
  return { store: forms }
}

function mapDispatchToProps(dispatch) {
  return {
    set: (formId, id, value) => { dispatch(Actions.set(formId, id, value)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Select)
