import { apiCallForBasicAuth} from "../../services/api/axiosApi";
import {
  GET,
  HOSTNAME,
  PATH_METHOD_GET_ALL_TASKS,
  PATH_METHOD_GET_FREE_TASKS,
  PATH_METHOD_GET_MINE_TASKS, PATH_METHOD_POST_CREATE_REPORT, PATH_METHOD_POST_CREATE_TASK,
  PORT, POST
} from "../../properties/properties";

export function fetchTasks (ob) {
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_ALL_TASKS, GET, ob.data.data, ob.data.credentials)
}

export function fetchMineTasks(ob) {
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_MINE_TASKS, GET, ob.data.data, ob.data.credentials)
}

export function fetchFreeTasks(ob) {
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_FREE_TASKS, GET, ob.data.data, ob.data.credentials)
}

export function createTask(ob) {
  console.log("ob = ", ob)
  let body = ob.data;
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_POST_CREATE_TASK, POST, body, ob.data.credentials)
}
