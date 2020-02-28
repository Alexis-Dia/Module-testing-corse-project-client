import { GET_REPORTS, SUCCESS, FAILURE } from './reportActions'
import { REPORT } from './reportProperties'

const initialState = {
    list: [],
};

const reportReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case GET_REPORTS + FAILURE:
      return {
        list: []
      };

    case GET_REPORTS + SUCCESS:

      return {
        list: []
      };

    default:
      return state;
  }

}
export default reportReducer