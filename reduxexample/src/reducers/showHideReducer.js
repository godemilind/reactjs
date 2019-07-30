import {SHOW_HIDE} from '../actions/actionTypes';

export default function showHideReducer(state=true,
    {type, payload}){
    if(payload !== undefined){
      console.log(`showHideReducer called ${payload.showHide}`);
    }
    switch(type){
      case SHOW_HIDE:
        return payload.showHide;
      default: return state 
    }
  }