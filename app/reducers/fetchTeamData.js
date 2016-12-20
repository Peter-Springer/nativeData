import Immutable, { List } from 'immutable'
import * as types from '../actions/actionTypes'

const teamData = (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'FETCH_TEAM_DATA':
    return Immutable.List(action.teamData)
  }
  return state;
};

export default teamData;
