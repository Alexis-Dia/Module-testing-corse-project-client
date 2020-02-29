import { apiCallForBasicAuth} from "../../services/api/axiosApi";
import {
  GET,
  HOSTNAME,
  PATH_METHOD_GET_ALL_TASKS,
  PATH_METHOD_GET_FREE_TASKS,
  PATH_METHOD_GET_MINE_TASKS,
  PORT
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
