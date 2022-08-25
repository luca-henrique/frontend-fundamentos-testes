/* eslint-disable import/prefer-default-export */
import { takeLatest, all, call, put } from 'redux-saga/effects'

import api from '../../../services/api'

import Types from './types'
import { signInSuccess, signOutSuccess } from './actions'

export function* signIn({ data }) {
  try {
    const response = yield call(api.post, '/signin', data)
    const res = response.data
    yield put(signInSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export function* signOut({ data }) {
  try {
    yield call(api.get, '/signout', data)
    yield put(signOutSuccess())
  } catch (error) {
    console.log(error)
  }
}

export default all([
  takeLatest(Types.SIGN_IN_REQUEST, signIn),
  takeLatest(Types.SIGN_OUT_REQUEST, signOut),
])
