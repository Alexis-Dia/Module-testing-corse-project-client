import { apiCallForLoggedUser} from "../../services/api/axiosApi";
import {GET, HOSTNAME, PORT} from "../../properties/properties";

export function fetchCars (ob) {
  console.log("1.1")
  return  apiCallForLoggedUser(HOSTNAME, PORT, GET, ob)
}

