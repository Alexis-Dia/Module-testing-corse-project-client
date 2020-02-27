import { fetchAuth } from './loginApi'
import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchLoginWithGolos, fetchPrivateKeyWithGolos} from "./loginApi";
import { SUCCESS, FAILURE, UNAUTHORIZED, LOGIN_GOLOS } from './loginActions'

export function fetchAuthApi (data) {
    console.log("1")
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
            yield put({type: LOGIN_GOLOS + UNAUTHORIZED, response})
        } else if (response) {
            yield put({ type: LOGIN_GOLOS + SUCCESS, response })
        } else {
            yield put({ type: LOGIN_GOLOS + FAILURE, error })
        }

}

export function * loginAuthFetch () {
    yield takeEvery(LOGIN_GOLOS, tryFetchAuth)
}

