import {UPDATE_USER} from './actionTypes';

export default function updateUser(user){

    console.log(`updateUserAction called ${UPDATE_USER}`);
    return {
        type: UPDATE_USER,
        payload:{
            user:user
        }
    }
}
