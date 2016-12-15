import { types } from './actionTypes';

export const fetchData = {
  fetchAllData: (data) => {
    return {type: types.FETCH_DATA, allData: data}
  }
};
