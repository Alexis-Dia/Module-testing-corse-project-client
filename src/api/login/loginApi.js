import {apiCall} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PORT} from "../../properties/properties";

export function fetchAuth (ob) {
  console.log("1.1")
  return  apiCall(HOSTNAME, PORT, GET, ob)
}

