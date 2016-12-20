import { types } from './actionTypes';

export const fetchPositionData = {
  fetchPositionData: (data) => {
    return {type: types.FETCH_POSITION_DATA, positionData: data}
  }
};
