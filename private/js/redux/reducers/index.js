import { combineReducers } from 'redux'
import placesReducer from './placesReducer'
import flightsReduces from './flightsReducer'
import loadingReducers from './loadingReducer'

const rootReducer = combineReducers({
  places: placesReducer,
  flights: flightsReduces,
  loading: loadingReducers
})

export default rootReducer
