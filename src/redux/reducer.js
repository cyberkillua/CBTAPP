import _Questions from "../data/questions"
import {combineReducers} from "redux";
 function Questions(state = _Questions, action){
    return state
}
const initialState = {
    seconds: 0,
    start_time : 0,
    status: 'paused',
    decrement_interval: 0
  }
function Timer(state = initialState, action) {
    switch(action.type) {
    case 'START_TIMER' :
      return Object.assign(
        {},
        state,
        {
          start_time : action.start_time,
          seconds : action.start_time,
          status : 'counting down'
        }
      );
    case 'STOP_TIMER' :
      return Object.assign(
        {},
        state,
        { status: 'paused' }
      );
    case 'TICK' :
      return Object.assign(
        {},
        state,
        { seconds: (state.seconds - .01).toFixed(2) }
      );
    default :
      return state;
  }
}

const rootReducers = combineReducers({Questions, Timer});



export default rootReducers