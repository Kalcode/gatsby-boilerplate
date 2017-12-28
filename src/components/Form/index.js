export Checkboxes from './Checkboxes'
export Input from './Inputs'
export Select from './Select'
export Submit from './Submit'
export TextArea from './TextArea'
export Radios from './Radios'

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
    honeypotted: (formId) => { dispatch(Actions.honeypotted(formId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
