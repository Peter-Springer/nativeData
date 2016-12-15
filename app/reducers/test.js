import * as types from '../actions/actionTypes'

const test = (state = {}, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
    return Object.assign({}, state, { greeting: action.data})

    default:
      return state;
  }
};

export default test;
