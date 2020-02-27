import {apiCall} from "../../services/api/axiosApi";
import {HOSTNAME, PORT, POST} from "../../properties/properties";

export function fetchAuth (ob) {
  console.log("1.1")
  return  apiCall(HOSTNAME, PORT, POST, ob)
}

