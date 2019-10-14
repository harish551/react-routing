import constants from '../constants'
const initialState = {  data: ["hello", "hello1"] };

export default function classReducer( state=initialState, action ) {
    switch(action.type) {
        case constants.FETCHING_LIST_DATA:
            console.log({
                	...state,
                  data: action.data
            });
            return {
                	...state,
                  data: action.data
            };
        default:
          return state;
    }
}
