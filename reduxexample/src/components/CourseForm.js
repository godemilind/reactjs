import React, { Component } from 'react'

class CourseForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            key:"",
             name:"",
             subject:"",
             duration:""
        };

        this.updateProperty = this.updateProperty.bind(this);
        this.addCourse = this.addCourse.bind(this);
    }
    

    updateProperty(e){
        this.setState({
            [e.target.name]:e.target.value
        },()=>{
            console.log(this.state);
        });
    }

    addCourse(e){
        this.props.addAction(this.state);
    }

    render() {
        return (
            <div>
                <h1>Course Form</h1>
                <table>
                <tbody>
                <tr>    
                    <td>Name: </td><td><input type="text" name="name" onChange={this.updateProperty} /></td>
                </tr>
                <tr>
                    <td>Subject: </td><td><input type="text" name="subject" onChange={this.updateProperty} /></td>
                </tr>
                <tr>
                    <td>Duration: </td><td><input type="text" name="duration" onChange={this.updateProperty} /></td>
                </tr>
                <tr>
                    <td><button onClick={this.addCourse} >Add</button></td>
                </tr>   
                </tbody>             
                </table>
                <br />
                <br />
            </div>
        )
    }
}

export default CourseForm;
