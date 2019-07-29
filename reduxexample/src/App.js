import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses';
import {connect} from 'react-redux';
import updateUser from './actions/updateUserAction'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  
  onUpdateUser = (e)=>{
    console.log('Button Clicked');
    this.props.onUpdateUser(e.target.value);
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <Courses />
        <input type='text' onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    products:state.products,
    user:state.user
});

const mapActionToProps =  {
    onUpdateUser:updateUser 
};

export default connect(mapStateToProps, mapActionToProps)(App);
