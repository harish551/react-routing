import { connect } from 'react-redux'
import Root from '../components/Root'
import { fetchingStudentsList } from '../actions'

export default connect(null, {fetchingStudentsList})(Root)
