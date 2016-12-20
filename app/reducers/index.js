import { combineReducers } from 'redux'
import user from './getUser'
import allData from './fetchData'
import teamData from './fetchTeamData'
import crimeData from './fetchCrimeData'
import positionData from './fetchPositionData'

const reducers = combineReducers({
  user,
  allData,
  teamData,
  crimeData,
  positionData,
})

export default reducers
