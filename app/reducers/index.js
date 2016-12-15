import { combineReducers } from 'redux'
import test from './test'
import two from './actionTwo'

const reducers = combineReducers({
  test,
  two
})

export default reducers
