import API from './api'
import * as Actions from './'
import { select, put, call, takeEvery } from 'redux-saga/effects'
import Logger from 'utils/logger'
import { getRef } from './selectors'

function * fetchData(action) {
  let ref = yield select(getRef)

  try {
    const data = yield call(API.fetchData, ref, action.page)
    yield put(Actions.fetched(ref, data, null))
  } catch (error) {
    Logger.error(error)
    yield put(Actions.fetched(ref, null, {
      msg: error.message,
      name: error.name,
    }))
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
    yield put(Actions.fetchedRef(null, 'No Ref'))
  }
}

export default function * watch() {
  yield takeEvery(Actions.Types.FETCH, fetchData)
  yield takeEvery(Actions.Types.FETCHREF, fetchRef)
}
