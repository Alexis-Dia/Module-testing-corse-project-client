import { fork } from 'redux-saga/effects'

import { loginAuthFetch, driversFetch } from '../api/login/loginSagas'
import { carsFetch } from '../api/car/carSagas'
import { reportsFetch, reportsByIdFetch } from '../api/report/reportSagas'
import { tasksFetch, mineTasksFetch, freeTasksFetch } from '../api/task/taskSagas'

// Your sagas for this container
export default function * rootSaga () {
  yield [
    fork(loginAuthFetch),
    fork(driversFetch),
    fork(carsFetch),
    fork(reportsFetch),
    fork(reportsByIdFetch),
    fork(tasksFetch),
    fork(mineTasksFetch),
    fork(freeTasksFetch)
  ]
}
