import { createReducer, createTypes } from 'reduxsauce'
import analytics from 'analytics'

export const Types = createTypes(`
    HONEYPOTTED
    INIT
    REGISTER
    SET
    SUBMIT
    SUBMITTED
  `, { prefix: '@@app/forms/' })

export const register = (id) => ({ type: Types.REGISTER, id })
export const submit = (formId, data) => ({ type: Types.SUBMIT, formId, data })
export const submitted = (formId, data) => ({ type: Types.SUBMITTED, formId, data })
export const set = (formId, id, value) => ({ type: Types.SET, formId, id, value })
export const honeypotted = (formId) => ({ type: Types.HONEYPOTTED, formId })

const INITIAL_STATE = {}

class ACTION_HANDLERS {
  static [Types.INIT](state = INITIAL_STATE, action) {
    return { ...state }
  }
  static [Types.REGISTER](state, action) {
    let forms = {}
    if (!state.hasOwnProperty(action.id)) {
      forms = { ...state }
      forms[action.id] = createBlankForm()
    }
    return { ...state, ...forms }
  }

  static [Types.SET](state, action) {
    let forms = { ...state }
    const { formId, id, value } = action
    if (!forms[formId]) {
      forms[formId] = createBlankForm()
    }
    forms[formId].fields[id] = value
    return { ...state, ...forms }
  }

  static [Types.SUBMIT](state, action) {
    let forms = { ...state }
    const { formId } = action
    if (forms[formId]) {
      forms[formId].fetching = true
      forms[formId].error = null
    } else {
      console.error('Redux: forms SUBMIT missing formID')
    }
    return { ...state, ...forms }
  }

  static [Types.SUBMITTED](state, action) {
    let forms = { ...state }
    const { formId, data } = action
    const form = forms[formId]
    if (form) {
      form.fetching = false
      if (data.Success) {
        analytics.event('contact', 'submitted')
        form.submitted = true
        form.valid = true
        form.error = null
      } else {
        // Error has occured
        form.submitted = false
        form.valid = false
        form.error = {
          fields: data.FieldErrors,
          ErrorText: data.ErrorText,
        }
      }
    } else {
      console.error('Redux (forms): Unknown formId')
    }
    return { ...state, ...forms }
  }

  static [Types.HONEYPOTTED](state, action) {
    let forms = { ...state }
    const { formId } = action
    const form = forms[formId]
    if (form) {
      form.fetching = false
      form.submitted = true
      form.valid = true
      form.error = null
    } else {
      console.error('Redux (forms): Unknown formId')
    }
    return { ...state, ...forms }
  }
}

function createBlankForm() {
  return {
    error: null,
    fetching: false,
    fields: {},
    submitted: false,
    valid: null,
  }
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
