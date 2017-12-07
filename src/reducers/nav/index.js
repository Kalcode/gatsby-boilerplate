import { createReducer, createTypes } from 'reduxsauce'

export const Types = createTypes(`
    INIT
    TOGGLE
    OPEN
    CLOSE
  `, { prefix: '@@app/nav/' })

export const toggle = () => ({ type: Types.TOGGLE })
export const open = () => ({ type: Types.OPEN })
export const close = () => ({ type: Types.CLOSE })

const INITIAL_STATE = {
  opened: false,
}

class ACTION_HANDLERS {
  static [Types.INIT](state = INITIAL_STATE, action) {
    return { ...state }
  }

  static [Types.TOGGLE](state, action) {
    const opened = !state.opened
    return { ...state, opened }
  }

  static [Types.OPEN](state, action) {
    const opened = true
    return { ...state, opened }
  }

  static [Types.CLOSE](state, action) {
    const opened = false
    return { ...state, opened }
  }
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
