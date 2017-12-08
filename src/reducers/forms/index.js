import { createReducer, createTypes } from 'reduxsauce'

export const Types = createTypes(`
    INIT
    REGISTER
    SET
    SUBMIT
    SUBMITTED
  `, { prefix: '@@app/forms/' })

export const register = (id) => ({ type: Types.REGISTER, id })
export const set = (formId, id, value) => ({ type: Types.SET, formId, id, value })

const INITIAL_STATE = {}

class ACTION_HANDLERS {
  static [Types.INIT](state = INITIAL_STATE, action) {
    return { ...state }
  }
  static [Types.REGISTER](state, action) {
    let forms = {}
    if (!state.hasOwnProperty(action.id)) {
      forms = { ...state }
      forms[action.id] = {
        error: false,
        fetching: false,
        fields: {},
        submitted: false,
        valid: null,
      }
    }
    return { ...state, ...forms }
  }

  static [Types.SET](state, action) {
    let forms = { ...state }
    const { formId, id, value } = action
    if (forms[formId]) {
      forms[formId].fields[id] = value
    }
    return { ...state, ...forms }
  }

}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
