import * as types from '../actions/actionTypes'

const two = (state = {}, action) => {
  switch(action.type) {
    case 'ACTION_TWO':
    return Object.assign({}, state, { pizzaType: action.pizza})

    default:
      return state;
  }
}

export default two;
