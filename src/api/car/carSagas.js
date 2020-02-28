import { fetchAuth } from './loginApi'
import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchCars } from "./carApi";
import { SUCCESS, FAILURE, UNAUTHORIZED, GET_CARS } from './carActions'

export function fetchAuthApi (data) {
    console.log("1")
    return fetchCars(data)
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
            yield put({type: GET_CARS + UNAUTHORIZED, response})
        } else if (response.httpStatus === 200) {
            yield put({ type: GET_CARS + SUCCESS, response })
        } else {
            yield put({ type: GET_CARS + FAILURE, error })
        }

}

export function * carsFetch () {
    yield takeEvery(GET_CARS, tryFetchAuth)
}

