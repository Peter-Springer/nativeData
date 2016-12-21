import { List } from 'immutable'
import * as types from '../actions/actionTypes'

const crimeData = (state = List([]), action) => {
  switch(action.type) {
    case 'FETCH_CRIME_DATA':
    return List(action.crimeData)
  }
  return state;
};

export default crimeData;
