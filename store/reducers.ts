import healthinfoReducer from './healthinfo.slice'
import { combineReducers } from '@reduxjs/toolkit'

export default combineReducers({
  healthinfo: healthinfoReducer,
})
