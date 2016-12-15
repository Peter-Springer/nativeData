import { getUser }  from '../actions/getUser'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => {
      dispatch(getUser.getUser(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
