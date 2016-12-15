import {testAction}  from '../actions/testActions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { greeting: state.test.greeting }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: (data) => {
      dispatch(testAction.sayHello(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
