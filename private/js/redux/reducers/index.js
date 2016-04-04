import { combineReducers } from 'redux'
import placesReducer from './placesReducer'
import flightsReduces from './flightsReducer'

const rootReducer = combineReducers({
  places: placesReducer,
  flights: flightsReduces
})

export default rootReducer
