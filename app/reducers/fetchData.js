import Immutable, { List } from 'immutable'
import * as types from '../actions/actionTypes'

const allData = (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'FETCH_DATA':
    return Immutable.List(action.allData)
  }
  return state;
};

export default allData;
