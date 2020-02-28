import { apiCallForBasicAuth} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PATH_METHOD_GET_ALL_REPORTS, PORT} from "../../properties/properties";

export function fetchReports (ob) {
  console.log("1.1")
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_ALL_REPORTS, GET, ob.data.data, ob.data.credentials)
}

