import { types } from './actionTypes';

export const fetchCrimeData = {
  fetchCrimeData: (data) => {
    return {type: types.FETCH_CRIME_DATA, crimeData: data}
  }
};
