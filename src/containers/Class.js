import { connect } from 'react-redux'
import Class  from '../App'
import { fetchingStudentsList } from '../actions'

const mapStateToProps = state => ({
      class: state.classReducer.data
})
export default connect(null, null)(Class)
