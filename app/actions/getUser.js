import { types } from './actionTypes';

export const getUser = {
  getUser: (data) => {
    return {type: types.GET_USER, user: data}
  }
};
