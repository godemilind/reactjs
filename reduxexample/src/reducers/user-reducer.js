import {UPDATE_USER} from '../actions/actionTypes';

export default function userReducer(state='',
    {type, payload}){
    console.log(payload);
    switch(type){
      case UPDATE_USER:
        return payload.user;
      default: return state 
    }
  }