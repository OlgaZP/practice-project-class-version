import { put } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import { getTransactionsRequest } from '../actions/actionCreator'
import * as restController from './../api/rest/restController'

export function * transactionSaga () {
  yield put(getTransactionsRequest())
  try {
    const { data } = yield restController.getTransactions()
    yield put(getTransactionsSuccess(data))
  } catch (err) {
    yield put(getTransactionsError(err))
  }
}
