'use strict'
import { types } from './actionTypes';

export const actionTwo = {
  sayGoodbye: () => {
    return {type: types.ACTION_TWO, pizza: 'cheese'}
  }
};
