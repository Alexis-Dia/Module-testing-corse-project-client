import { fetchAuth } from './loginApi'
import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchLoginWithGolos, fetchPrivateKeyWithGolos} from "./loginApi";
import { SET_CURRENT_USER, SUCCESS, FAILURE, UNAUTHORIZED, LOGIN_GOLOS } from './loginActions'

export function fetchAuthApi (data) {
    return fetchAuth(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetchAuth (data) {
        const { response, error } = yield call(fetchAuthApi, data);

        if (response.status === 401) {
            yield put({type: SET_CURRENT_USER + UNAUTHORIZED, response})
        } else if (response) {
            yield put({ type: SET_CURRENT_USER + SUCCESS, response })
        } else {
            yield put({ type: SET_CURRENT_USER + FAILURE, error })
        }

}

export function * loginAuthFetch () {
    yield takeEvery(SET_CURRENT_USER, tryFetchAuth)
}




export function fetchLoginWithGolosApi (data) {
  return fetchLoginWithGolos(data)
    .then(data => {
      return { response: data }
    })
    .catch(err => {
      return err
    })
}

export function * tryFetchLoginWithGolosApi (data) {
  const { response, error } = yield call(fetchLoginWithGolosApi, data);
  const isPrivateKey = fetchPrivateKeyWithGolos(data);

  if (response.length > 0 && isPrivateKey[0]) {
    yield put({ type: LOGIN_GOLOS + SUCCESS, response: [isPrivateKey[0], isPrivateKey[1], response] })
  } else {
    yield put({ type: LOGIN_GOLOS + FAILURE, response: [isPrivateKey[0], isPrivateKey[1], response] })
  }
}

export function * loginWithGolos () {
  console.log(LOGIN_GOLOS);
  yield takeEvery(LOGIN_GOLOS, tryFetchLoginWithGolosApi)
}
