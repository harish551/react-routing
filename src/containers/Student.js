import { connect } from 'react-redux'
import Students  from '../components/students'

const mapStateToProps = state => ({
  students: state.studentReducer.data
});

export default connect(mapStateToProps)(Students)
