import { DELETE_CURRENT_USER, SUCCESS, FAILURE, LOGIN, GET_DRIVERS } from './loginActions'
import { LOGIN_INVALID_CREDENTIALS } from './loginProperties'

const initialState = {
    isAuthenticated: false,
    user: {},
    list: []
};

const loginReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case LOGIN + FAILURE:
      return {
        isAuthenticated: false,
        user: {errors: LOGIN_INVALID_CREDENTIALS}
      };

    case LOGIN + SUCCESS:

      return {
        isAuthenticated: true,
        user: {...action.response.result}
      };

    case GET_DRIVERS + FAILURE:
      return  {
        ...state,
        list: []
      };

    case GET_DRIVERS + SUCCESS:
      return  {
        ...state,
        list: {...action.response.result}
      };

    case DELETE_CURRENT_USER:

      return {
        isAuthenticated: false,
        user: {}
      };

    default:
      return state;
  }

}
export default loginReducer
