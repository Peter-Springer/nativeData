import { combineReducers } from 'redux'
import user from './getUser'
import allData from './fetchData'
import teamData from './fetchTeamData'

const reducers = combineReducers({
  user,
  allData,
  teamData
})

export default reducers
