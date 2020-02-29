import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchTasks, fetchMineTasks, fetchFreeTasks} from "./taskApi";
import {SUCCESS, FAILURE, UNAUTHORIZED, GET_TASKS, GET_MINE_TASK, GET_FREE_TASK} from './taskActions'

export function fetchApi (data) {
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


export function fetchMineApi (data) {
    return fetchMineTasks(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetchMine (data) {
    const { response, error } = yield call(fetchMineApi, data);
    if (response.httpStatus === 401) {
        yield put({type: GET_TASKS + UNAUTHORIZED, response})
    } else if (response.httpStatus === 200) {
        yield put({ type: GET_TASKS + SUCCESS, response })
    } else {
        yield put({ type: GET_TASKS + FAILURE, error })
    }

}

export function * mineTasksFetch () {
    yield takeEvery(GET_MINE_TASK, tryFetchMine)
}


export function fetchFreeApi (data) {
    return fetchFreeTasks(data)
        .then(data => {
            return { response: data }
        })
        .catch(err => {
            return err
        })
}

export function * tryFetchFreeTask (data) {
    const { response, error } = yield call(fetchFreeApi, data);
    if (response.httpStatus === 401) {
        yield put({type: GET_FREE_TASK + UNAUTHORIZED, response})
    } else if (response.httpStatus === 200) {
        yield put({ type: GET_FREE_TASK + SUCCESS, response })
    } else {
        yield put({ type: GET_FREE_TASK + FAILURE, error })
    }

}

export function * freeTasksFetch () {
    yield takeEvery(GET_FREE_TASK, tryFetchFreeTask)
}