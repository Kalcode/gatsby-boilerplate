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
export const fetched = (ref, data, error) => ({ type: Types.FETCHED, ref, data, error })

const INITIAL_STATE = {
  data: null,
  error: null,
  fetching: false,
  page: null,
  total_pages: null,
  next_page: null,
  ref: null,
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
    console.log(action)

    const error = action.error
    const fetching = false
    const ref = action.ref
    return { ...state, error, fetching, ref }
  }

  static [Types.FETCHED](state, action) {
    const fetching = false
    if (action.data) {
      let data = state.data && state.data.slice()
      data = data ? data.concat(action.data.results) : action.data.results
      const ref = action.ref
      const { page, total_pages, next_page } = action.data
      return { ...state, data, ref, fetching, page, total_pages, next_page }
    } else {
      const error = action.error
      return { ...state, fetching, error }
    }
  }
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
