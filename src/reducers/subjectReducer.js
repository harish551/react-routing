import constants from '../constants'
const initialState = {  data: {} };

export default function subjectReducer( state=initialState, action ) {
    switch(action.type) {
        case constants.FETCHING_SUBJECT_DATA:
            return {
                	...state
            };

        default:
          return state;
    }
}
