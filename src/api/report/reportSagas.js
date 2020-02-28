import { takeEvery, call, put } from 'redux-saga/effects'
import { SUCCESS, FAILURE, UNAUTHORIZED, GET_REPORTS } from './reportActions'

export function fetchApi (data) {
    console.log("1")
    return fetchReports(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetch (data) {
        const { response, error } = yield call(fetchApi, data);
    console.log("2.1 status = ", response)
    console.log("2.2 status = ", error)
        if (response.httpStatus === 401) {
            yield put({type: GET_REPORTS + UNAUTHORIZED, response})
        } else if (response.httpStatus === 200) {
            yield put({ type: GET_REPORTS + SUCCESS, response })
        } else {
            yield put({ type: GET_REPORTS + FAILURE, error })
        }

}

export function * reportsFetch () {
    yield takeEvery(GET_REPORTS, tryFetch)
}

