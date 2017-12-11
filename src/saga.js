import { fork } from 'redux-saga/effects'
import forms from 'reducers/forms/saga'

export default function * root() {
  yield fork(forms)
}
