import { fetchAuth } from './loginApi'
import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchLoginWithGolos, fetchPrivateKeyWithGolos} from "./loginApi";
import { SUCCESS, FAILURE, UNAUTHORIZED, LOGIN } from './loginActions'

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
    console.log("2.1 status = ", response)
    console.log("2.2 status = ", error)
        if (response.httpStatus === 401) {
            yield put({type: LOGIN + UNAUTHORIZED, response})
        } else if (response.httpStatus === 200) {
            yield put({ type: LOGIN + SUCCESS, response })
        } else {
            yield put({ type: LOGIN + FAILURE, error })
        }

}

export function * loginAuthFetch () {
    yield takeEvery(LOGIN, tryFetchAuth)
}

