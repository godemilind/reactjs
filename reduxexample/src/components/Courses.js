import React, { Component } from 'react'
import CourseForm from './CourseForm';
import CoursesList from './CoursesList';

class Courses extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             courses:[{
                 key:"",
                 name:"Vihaan",
                 subject:"Java",
                 duration:"1"
             }]
        }

        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
    }
    
    addCourse(course){
        this.state.courses.push(course);
        this.setState({
            courses:this.state.courses
        });
    }

    deleteCourse(course){
        console.log(`deleteCourse Called: ${course}`);
    }

    editCourse(course){
        console.log(`editCourse Called: ${course}`);
    }    

    render() {
        return (
            <div>
                <CourseForm addAction={this.addCourse}/>
                <CoursesList courses={this.state.courses} deleteAction={this.deleteCourse} editAction={this.editCourse}/>
            </div>
        )
    }
}



export default Courses;