import { takeEvery, call, put } from 'redux-saga/effects'
import {SUCCESS, FAILURE, UNAUTHORIZED, GET_REPORTS, GET_REPORTS_BY_TASK_ID} from './reportActions'
import {fetchReports, fetchReportsById} from "./reportApi";

export function fetchApi (data) {
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


export function fetchByIdApi (data) {
    return fetchReportsById(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetchById (data) {
    const { response, error } = yield call(fetchByIdApi, data);
    if (response.httpStatus === 401) {
        yield put({type: GET_REPORTS + UNAUTHORIZED, response})
    } else if (response.httpStatus === 200) {
        yield put({ type: GET_REPORTS + SUCCESS, response })
    } else {
        yield put({ type: GET_REPORTS + FAILURE, error })
    }

}

export function * reportsByIdFetch () {
    yield takeEvery(GET_REPORTS_BY_TASK_ID, tryFetchById)
}