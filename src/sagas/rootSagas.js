import { fork } from 'redux-saga/effects'

import { loginAuthFetch, driversFetch } from '../api/login/loginSagas'
import { carsFetch, newCarCreate } from '../api/car/carSagas'
import { reportsFetch, reportsByIdFetch, createNewReportFetch } from '../api/report/reportSagas'
import { tasksFetch, mineTasksFetch, freeTasksFetch, createNewTaskSaga } from '../api/task/taskSagas'

// Your sagas for this container
export default function * rootSaga () {
  yield [
    fork(loginAuthFetch),
    fork(driversFetch),
    fork(carsFetch),
    fork(newCarCreate),
    fork(reportsFetch),
    fork(reportsByIdFetch),
    fork(createNewReportFetch),
    fork(tasksFetch),
    fork(mineTasksFetch),
    fork(createNewTaskSaga),
    fork(freeTasksFetch),
  ]
}
