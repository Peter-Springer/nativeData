import { combineReducers } from 'redux'
import user from './getUser'
import allData from './fetchData'

const reducers = combineReducers({
  user,
  allData
})

export default reducers
