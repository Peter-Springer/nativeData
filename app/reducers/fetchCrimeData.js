import Immutable, { List } from 'immutable'
import * as types from '../actions/actionTypes'

const crimeData = (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'FETCH_CRIME_DATA':
    return Immutable.List(action.crimeData)
  }
  return state;
};

export default crimeData;
