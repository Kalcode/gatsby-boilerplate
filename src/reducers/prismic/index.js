import { createReducer, createTypes } from 'reduxsauce'

export const Types = createTypes(`
    INIT
    FETCH
    FETCHREF
    FETCHEDREF
    FETCHED
  `, { prefix: '@@app/prismic/' })

export const fetch = (page) => ({ type: Types.FETCH, page })
export const fetchRef = (ref) => ({ type: Types.FETCHREF, ref })
export const fetchedRef = (ref, error) => ({ type: Types.FETCHEDREF, ref, error })
export const fetched = (data, error) => ({ type: Types.FETCHED, data, error })

const INITIAL_STATE = {
  data: null,
  error: null,
  fetching: false,
  next_page: null,
  page: null,
  ref: null,
  total_pages: null,
}

class ACTION_HANDLERS {
  static [Types.INIT](state = INITIAL_STATE, action) {
    return { ...state }
  }

  static [Types.FETCH](state, action) {
    return { ...state, fetching: true }
  }

  static [Types.FETCHREF](state, action) {
    return { ...state, fetching: true }
  }

  static [Types.FETCHEDREF](state, action) {
    const error = action.error
    const fetching = false
    const ref = action.ref || null
    return { ...state, error, fetching, ref }
  }

  static [Types.FETCHED](state, action) {
    const fetching = false
    if (action.data && !action.data.error) {
      let data = state.data && state.data.slice()
      data = data ? data.concat(action.data.results) : action.data.results
      const { page, total_pages, next_page } = action.data
      return { ...state, data, fetching, page, total_pages, next_page }
    } else {
      const error = action.error || (action.data && { message: action.data.error })
      return { ...state, fetching, error }
    }
  }
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
