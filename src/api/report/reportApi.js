import { apiCallForBasicAuth} from "../../services/api/axiosApi";
import {
  GET,
  HOSTNAME,
  PATH_METHOD_GET_ALL_REPORTS,
  PATH_METHOD_GET_FREE_TASKS, PATH_METHOD_GET_REPORTS_BY_TASK_ID,
  PORT
} from "../../properties/properties";

export function fetchReports (ob) {
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_ALL_REPORTS, GET, ob.data.data, ob.data.credentials)
}

export function fetchReportsById(ob) {
  console.log("fetchReportsById 1.1 = ", ob)
  let taskId = ob.data.data.taskId;
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_REPORTS_BY_TASK_ID + taskId, GET, ob.data.data, ob.data.credentials)
}

