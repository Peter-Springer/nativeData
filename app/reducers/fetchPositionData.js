import Immutable, { List } from 'immutable'
import * as types from '../actions/actionTypes'

const positionData = (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'FETCH_POSITION_DATA':
    return Immutable.List(action.positionData)
  }
  return state;
};

export default positionData;
