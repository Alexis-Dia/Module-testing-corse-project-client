import { GET_CARS, CREATE_CAR, SUCCESS, FAILURE } from './carActions'
import { CAR } from './carProperties'

const initialState = {
    list: [],
};

const carReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case GET_CARS + FAILURE:
      return  {
        ...state,
        list: action.response.result
      };

    case GET_CARS + SUCCESS:

      return  {
        ...state,
        list: action.response.result
      };

    default:
      return state;
  }

}
export default carReducer