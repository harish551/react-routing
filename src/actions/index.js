import constants from '../constants'


export function fetchingStudentsList() {
  console.log("hi")
  return function (dispatch) {
    dispatch(fetchingStudents())
  }
}

export function fetchingClass() {
  return function (dispatch) {
    dispatch( {
      type: constants.FETCHING_CLASS_DATA,
      data:[]
    })
  }
}
export function fetchingStudents() {
    return {
      type: constants.FETCHING_LIST_DATA,
      data: ["student1", "student2", "student3"]
    }
}
export function fetchingSubjects() {
  return function (dispatch) {
    dispatch({
      type: constants.FETCHING_SUBJECT_DATA,
      data: []
    })
  }
}
