import * as types from '../actions/actionTypes'

const allData = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_DATA':
    return Object.assign({}, state, { allData: action.allData})

    default:
      return state;
  }
};

export default allData;
