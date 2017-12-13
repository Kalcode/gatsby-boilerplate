export Input from './Inputs'
export TextArea from './TextArea'
export Select from './Select'
export Submit from './Submit'
export Checkboxes from './Checkboxes'

import Form from './Form'
import { connect } from 'react-redux'
import * as Actions from 'reducers/forms'

function mapStateToProps({ forms }) {
  return {
    store: forms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: (id) => { dispatch(Actions.register(id)) },
    submit: (formId, data) => { dispatch(Actions.submit(formId, data)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
