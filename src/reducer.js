import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import count from 'reducers/count'

export default combineReducers({
  routing,
  count,
})
