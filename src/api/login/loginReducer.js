import { DELETE_CURRENT_USER, SUCCESS, FAILURE, LOGIN_GOLOS } from './loginActions'
import { LOGIN_GOLOS_CORE, LOGIN_INVALID_CREDENTIALS, LOGIN_JWT_TOKEN, LOGIN_USER_NAME, LOGIN_WIF, LOGIN_WIF_IS_TRUE } from './loginProperties'
import { EMPTY_STRING } from "../../properties/properties";
//import setAuthorizationToken from '../../utils/setAuthorizationToken';
import golos from "golos-js";

const initialState = {
    isAuthenticated: false,
    user: {}
};

const loginReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case LOGIN_GOLOS + FAILURE:
      return {
        isAuthenticated: false,
        user: {errors: LOGIN_INVALID_CREDENTIALS}
      };

    case LOGIN_GOLOS + SUCCESS:

      const res = fetchLoginWithGolosAccounts()
        .then(response => {
          return response;
        });
      const response = res.then(response => {
        return response;
      });
      const re = response.then(response => {
        return response;
      });

      localStorage.setItem(LOGIN_WIF_IS_TRUE, action.response[0]);
      localStorage.setItem(LOGIN_WIF, action.response[1]);
      localStorage.setItem(LOGIN_USER_NAME, action.response[2][0].name);
      return {
        isAuthenticated: true,
        user: {username: EMPTY_STRING, id: EMPTY_STRING}
      };

    case DELETE_CURRENT_USER:
      localStorage.removeItem(LOGIN_JWT_TOKEN);
      localStorage.removeItem(LOGIN_WIF);
      localStorage.removeItem(LOGIN_USER_NAME);
      //setAuthorizationToken(false);
      return {
        isAuthenticated: false,
        user: {}
      };

    default:
      return state;
  }

}

function fetchLoginWithGolosAccounts() {
  let accounts = [LOGIN_GOLOS_CORE];
  return golos.api.getAccounts(accounts)
}

export default loginReducer
