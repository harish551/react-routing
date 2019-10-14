import { connect } from 'react-redux'
import List  from '../components/List'

const mapStateToProps = state => ({
  list: state.listReducer.data
});

export default connect(mapStateToProps)(List)
