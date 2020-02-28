import { GET_CARS, CREATE_CAR, SUCCESS, FAILURE } from './carActions'
import { CAR } from './carProperties'

const initialState = {
    list: [],
};

const carReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case GET_CARS + FAILURE:
      return {
        list: []
      };

    case GET_CARS + SUCCESS:

      return {
        list: []
      };

    default:
      return state;
  }

}
export default carReducer