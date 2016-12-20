import Immutable, { Map } from 'immutable'
import * as types from '../actions/actionTypes'

const user = (state = Immutable.Map({}), action) => {
  switch(action.type) {
    case 'GET_USER':
    return Immutable.Map(action.user)
  }
  return state;
};

export default user;
