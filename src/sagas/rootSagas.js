import { fork } from 'redux-saga/effects'

import { loginAuthFetch, loginWithGolos } from '../api/login/loginSagas'

// Your sagas for this container
export default function * rootSaga () {
  yield [
    fork(loginAuthFetch),
    fork(loginWithGolos),
  ]
}
