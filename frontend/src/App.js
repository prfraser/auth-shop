import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Button } from 'reactbulma';
import './App.css';

class App extends Component {
  state = {
    loggedIn: false
  }

  render() {

    let loggedInState = null
    if (!this.state.loggedIn) {
      loggedInState = <div>
                        <LoginForm />
                        <Button>Register</Button>
                      </div>
    } else {
      loggedInState = <div>
                        <p>All Products</p>
                      </div>
    }

    return (
      <div className="App">
        {loggedInState}        
      </div>
    );
  }

  componentDidMount() {
    // axios.get()
  }
}

export default App;
