import { fetchAuth } from './loginApi'
import { takeEvery, call, put } from 'redux-saga/effects'
import {SUCCESS, FAILURE, UNAUTHORIZED, LOGIN, GET_DRIVERS} from './loginActions'

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

export function fetchDriversApi (data) {
    console.log("1")
    return fetchDrivers(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetchDrivers (data) {
    const { response, error } = yield call(fetchDriversApi, data);
    console.log("2.1 status = ", response)
    console.log("2.2 status = ", error)
    if (response.httpStatus === 401) {
        yield put({type: GET_DRIVERS + UNAUTHORIZED, response})
    } else if (response.httpStatus === 200) {
        yield put({ type: GET_DRIVERS + SUCCESS, response })
    } else {
        yield put({ type: GET_DRIVERS + FAILURE, error })
    }

}

export function * driversFetch () {
    yield takeEvery(GET_DRIVERS, tryFetchDrivers)
}
