import * as types from '../actions/actionTypes'

const user = (state = {}, action) => {
  switch(action.type) {
    case 'GET_USER':
    return Object.assign({}, state, { user: action.user})

    default:
      return state;
  }
};

export default user;
