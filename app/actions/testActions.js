'use strict';
import { types } from './actionTypes';

export const testAction = {
  sayHello: (data) => {
    return {type: types.TEST_ACTION, data: data}
  }
};
