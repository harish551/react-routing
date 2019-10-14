import constants from '../constants'
const initialState = {  data: {} };

export default function classReducer( state=initialState, action ) {
    switch(action.type) {
        case constants.FETCHING_CLASS_DATA:
            return {
                	...state
            };

        default:
          return state;
    }
}
