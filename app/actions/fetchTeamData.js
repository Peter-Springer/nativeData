import { types } from './actionTypes';

export const fetchTeamData = {
  fetchTeamData: (data) => {
    return {type: types.FETCH_TEAM_DATA, teamData: data}
  }
};
