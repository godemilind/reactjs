import {LIST_COURSES} from '../actions/actionTypes';

export default function showHideReducer(state=true,
    {type, payload}){
    if(payload !== undefined){
      console.log(`showHideReducer called ${payload.showHide}`);
    }
    switch(type){
      case LIST_COURSES:
        return payload.showHide;
      default: return state 
    }
  }