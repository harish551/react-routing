import constants from '../constants'
const initialState = {  data: {} };

export default function studentReducer( state=initialState, action ) {
    switch(action.type) {
        case constants.FETCHING_STUDENT_DATA:
            return {
                	...state,
                  data: action.data
            };

        default:
          return state;
    }
}
