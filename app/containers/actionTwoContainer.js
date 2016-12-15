import {actionTwo}  from '../actions/actionTwo'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  debugger;
  return { pizzaType: state.two.pizzaType }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sayGoodbye: () => {
      dispatch(actionTwo.sayGoodbye())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
