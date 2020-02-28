import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchCars } from "./carApi";
import { SUCCESS, FAILURE, UNAUTHORIZED, GET_CARS} from './carActions'

export function fetchCarsApi (data) {
    return fetchCars(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetchCars (data) {
        const { response, error } = yield call(fetchCarsApi, data);
        if (response.httpStatus === 401) {
            yield put({type: GET_CARS + UNAUTHORIZED, response})
        } else if (response.httpStatus === 200) {
            yield put({ type: GET_CARS + SUCCESS, response })
        } else {
            yield put({ type: GET_CARS + FAILURE, error })
        }

}

export function * carsFetch () {
    yield takeEvery(GET_CARS, tryFetchCars)
}

