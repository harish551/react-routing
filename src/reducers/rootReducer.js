import { combineReducers } from 'redux'
import classReducer from './classReducer'
import studentReducer from './studentReducer'
import subjectReducer from './subjectReducer'
import listReducer from './listReducer'

export  default combineReducers({
    classReducer,
    studentReducer,
    subjectReducer,
    listReducer
});
