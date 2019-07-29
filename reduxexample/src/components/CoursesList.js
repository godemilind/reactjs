import React, { Component } from 'react'

class CoursesList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.deleteCourse = this.deleteCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
    }
    

    deleteCourse(course, id){
        this.props.deleteAction(course);
    }

    editCourse(course){
        this.props.editAction(course);
    }    

    render() {
        return (
            <div>
                <table> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Duration</th>
                    </tr>
                </thead>                    
                {this.props.courses.map((course, id) =>
                    <tbody>
                        <tr>
                            <td>{course.name}</td>
                            <td>{course.subject}</td>
                            <td>{course.duration}</td>
                            <td><button onClick={()=>this.editCourse(course,id)}>Edit</button></td>
                            <td><button onClick={()=>this.deleteCourse(course)}>Delete</button></td>
                        </tr>
                    </tbody>
                )}
                </table>
            </div>
        )
    }
}



export default CoursesList;