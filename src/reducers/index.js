import { combineReducers } from 'redux'
import forms from 'reducers/forms'
import nav from 'reducers/nav'
import prismic from 'reducers/prismic'

export default combineReducers({
  forms,
  nav,
  prismic,
})
