import {apiCall, apiCallForLoggedUser} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PORT} from "../../properties/properties";

export function fetchAuth (ob) {
  console.log("1.1")
  return  apiCall(HOSTNAME, PORT, GET, ob)
}

export function fetchDrivers(ob) {
  console.log("1.2")
  return  apiCallForLoggedUser(HOSTNAME, PORT, GET, ob)
}

