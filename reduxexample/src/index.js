import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import thunk from 'redux-thunk'
import {applyMiddleware,compose,combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'
import showHideReducer from './reducers/showHideReducer'

// const reducer =  (state, {type, payload})=>{
//   if(type === 'changeState'){
//     return payload.newState;
//   }else {
//     return 'State'
//   }
// }


// function userReducer(state='',
//     {type, payload}){
//     console.log(payload);
//     switch(type){
//       case 'users:updateUser':
//         return payload.user;
//       default: return state 
//     }
//   }

const allStoreEnhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);


const allReducers = combineReducers({
  products:productsReducer,
  user:userReducer,
  showHide:showHideReducer
});

const store = createStore(allReducers,
  {
  products: [{name:'iPhone'}],
  user: 'Micheal'
  },
  allStoreEnhancer
);

// const action = {
//   type:'changeState',
//   payload:{
//     newState:"newState"
//   }
// }

//console.log(store.getState());

//store.dispatch(action);

//console.log(store.getState());

const updateUserAction = {
  type:"updateUser",
  payload:{
    user:"Milind"
  }
}

store.dispatch(updateUserAction);

const updateUserAction2 = {
  type:"updateUser",
  payload:{
    user:"Vihaan"
  }
}

store.dispatch(updateUserAction2);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
