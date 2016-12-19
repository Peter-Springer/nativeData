import * as types from '../actions/actionTypes'

const teamData = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TEAM_DATA':
    return Object.assign({}, state, { teamData: action.teamData})

    default:
      return state;
  }
};

export default teamData;
