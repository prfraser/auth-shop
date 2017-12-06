import React, { Component } from 'react';
import axios from 'axios';
import { Control, Title, Level, Button, Input} from 'reactbulma';
import '../App.css';

class LoginForm extends Component {
  state = {
    emailValue: '',
    passwordValue: ''
  }

  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...' 
        }
    axios.post('/auth', {
      email: this.state.emailValue,
      password: this.state.passwordValue
    })
      .then((response) => {

      })
      .catch((error) => {
        console.log('An error occured when trying to login.', error)
      })
  }

  render() {
    return (
      <Level>
        <Control>
          <Title>Log In</Title>
          <form onSubmit={this.handleLoginSubmit}>
            <Input type="text" 
              placeholder="Email" 
              name="emailValue" 
              onChange={this.handleLoginChange}
              value={this.state.emailValue} />
            <Input type="password" 
              placeholder="Password" 
              name="passwordValue" 
              onChange={this.handleLoginChange}
              value={this.state.passwordValue} />
            <Button>Log In</Button>
          </form>
        </Control>
      </Level>
    )
  }
}

export default LoginForm;
