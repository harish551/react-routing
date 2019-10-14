import { connect } from 'react-redux'
import Subjects  from '../components/subjects.js'

const mapStateToProps = state => ({
  subject: state.subjectReducer.data
});
export default connect(mapStateToProps)(Subjects)
