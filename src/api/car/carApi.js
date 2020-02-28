import { apiCallForBasicAuth} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PATH_METHOD_GET_ALL_DRIVERS, PORT} from "../../properties/properties";

export function fetchCars (ob) {
  console.log("1.1")
  return  apiCallForBasicAuth(HOSTNAME, PORT, PATH_METHOD_GET_ALL_DRIVERS, GET, ob.data.data, ob.data.credentials)
}

