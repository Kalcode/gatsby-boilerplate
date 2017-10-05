import { createReducer } from 'reduxsauce'

export class Types {
  static INIT = '@@redux/count/INIT'
  static ADD = '@@redux/count/ADD'
  static SET = '@@redux/count/SET'
}

export const ADD = () => ({ type: Types.TOGGLE })
export const set = (val) => ({ type: Types.SET, val })

const INITIAL_STATE = {
  total: 0,
}

class ACTION_HANDLERS {
  static [Types.INIT](state, action) {
    return { ...state }
  }

  static [Types.ADD](state, action) {
    const total = state.total++
    return { ...state, total }
  }

  static [Types.SET](state, action) {
    const total = action.val
    return { ...state, total }
  }
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
