import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses';
import {connect} from 'react-redux';
import updateUser from './actions/updateUserAction'
import showHideAction from './actions/showHideAction'
import coursesAction from './actions/coursesAction'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onShowHide = this.onShowHide.bind(this);
    this.showCourses = this.showCourses.bind(this);
  }
  
  onUpdateUser = (e)=>{
    console.log('Button Clicked');
    this.props.onUpdateUser(e.target.value);
  }

  onShowHide = (e)=>{
    this.props.onShowHide(!this.props.showHide);
  }

  showCourses(e){
    this.props.showCourses();
  }

  componentDidMount(){
    this.props.showCourses();
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <Courses />
        <input type='text' onChange={this.onUpdateUser} />
        {this.props.user}
        <br />
        <button onClick={this.onShowHide} >Show Hide</button>
        <br />
        <span hidden={this.props.showHide} >Show Hide</span>
        <br />
        <button onClick={this.showCourses} >Show Courses</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    products:state.products,
    user:state.user,
    showHide:state.showHide
});

const mapActionToProps =  {
    onUpdateUser:updateUser ,
    onShowHide:showHideAction,
    showCourses:coursesAction
};

export default connect(mapStateToProps, mapActionToProps)(App);
