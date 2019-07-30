import {SHOW_HIDE} from './actionTypes';
import $ from 'jquery';

export default function CoursesAction(){

    return dispatch => {
    console.log(`listCoursesAction called`);
        $.ajax({
            url:'http://localhost:8080/courses',
            success(data){
                console.log(data);
            },
            error(){
                console.log("Error Occured");
            },type: "GET",
            crossDomain: true,
        });
    }
}