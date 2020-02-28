import { GET_TASKS, SUCCESS, FAILURE } from './taskActions'
import { TASK } from './taskProperties'

const initialState = {
    list: [],
};

const taskReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case GET_TASKS + FAILURE:
      return {
        list: []
      };

    case GET_TASKS + SUCCESS:

      return {
        list: []
      };

    default:
      return state;
  }

}
export default taskReducer