import { fetchAuth } from './loginApi'
import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchTasks } from "./taskApi";
import { SUCCESS, FAILURE, UNAUTHORIZED, GET_TASKS } from './taskActions'

export function fetchApi (data) {
    console.log("1")
    return fetchTasks(data)
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
            yield put({type: GET_TASKS + UNAUTHORIZED, response})
        } else if (response.httpStatus === 200) {
            yield put({ type: GET_TASKS + SUCCESS, response })
        } else {
            yield put({ type: GET_TASKS + FAILURE, error })
        }

}

export function * tasksFetch () {
    yield takeEvery(GET_TASKS, tryFetch)
}

