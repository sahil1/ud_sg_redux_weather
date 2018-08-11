import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  console.log('Action received ', action);
  switch (action.type){
    case FETCH_WEATHER:
      return [action.payload.data].concat(state);
      //return state.concat([action.payload.data]); //don't use state.push to avoid mutating state
      //return [action.payload.data, ...state]; //same as above line but with ES6 syntax
    default:
      return []
  }

//  return state;
}
