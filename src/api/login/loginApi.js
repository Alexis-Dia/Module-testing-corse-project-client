import {apiCall, apiCallForBasicAuth} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PATH_METHOD_GET_ALL_DRIVERS, PORT} from "../../properties/properties";

export function fetchAuth (ob) {
  console.log("1.1")
  return  apiCall(HOSTNAME, PORT, GET, ob)
}

export function fetchDrivers(ob) {
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_ALL_DRIVERS, GET, ob.data.data, ob.data.credentials)
}

