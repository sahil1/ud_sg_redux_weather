import { combineReducers } from 'redux';
import WeatherReducuer from './reducer_weather'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: WeatherReducuer
});

export default rootReducer;
