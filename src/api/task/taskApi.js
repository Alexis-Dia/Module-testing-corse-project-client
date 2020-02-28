import { apiCallForBasicAuth} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PATH_METHOD_GET_ALL_TASKS, PORT} from "../../properties/properties";

export function fetchTasks (ob) {
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_ALL_TASKS, GET, ob.data.data, ob.data.credentials)
}

