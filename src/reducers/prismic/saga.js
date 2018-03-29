import API from './api'
import * as Actions from './'
import { select, put, call, takeEvery } from 'redux-saga/effects'
import Logger from 'utils/logger'
import { getRef } from './selectors'

function * fetchData(action) {
  let ref = yield select(getRef)

  try {
    const data = yield call(API.fetchData, ref, action.page)
    yield put(Actions.fetched(data, null))
  } catch (error) {
    Logger.error(error)
    yield put(Actions.fetched(null, { message: error.message, stack: error.stack }))
  }
}

function * fetchRef(action) {
  let ref = action.ref
  try {
    if (!ref) {
      ref = yield call(API.fetchRef)
    }
    yield put(Actions.fetchedRef(ref, null))
  } catch (error) {
    Logger.error(error)
    yield put(Actions.fetchedRef(null, { message: error.message, stack: error.stack }))
  }
}

export default function * watch() {
  yield takeEvery(Actions.Types.FETCH, fetchData)
  yield takeEvery(Actions.Types.FETCHREF, fetchRef)
}
