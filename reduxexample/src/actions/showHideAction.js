import {SHOW_HIDE} from './actionTypes';

export default function showHide(showHide){

    console.log(`updateUserAction called ${SHOW_HIDE} ${showHide}`);
    return {
        type: SHOW_HIDE,
        payload:{
            showHide:showHide
        }
    }
}