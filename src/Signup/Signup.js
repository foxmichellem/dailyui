import React, { Component } from 'react';
import './Signup.css';
import './../Grid.css';
var createReactClass = require('create-react-class');

class Confirmation extends Component {
  render(){
    return (
      <div className="confirmation">
        <h1>You signed up</h1>
      </div>
    )
  }
}

class SignupForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      showConfirmation: false
    }

  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, fieldValue) {
    var fieldValidationErrors = this.state.formErrors;
    var emailValid = this.state.emailValid;
    var passwordValid = this.state.passwordValid;

    if (fieldName === "email"){
      emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    }
    else if (fieldName === "password"){
      passwordValid = fieldValue.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);

  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

//For this to work, I will need to define my own has-error class because I'm not using the bootstrap default
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

 handleSubmit = () => {
    this.setState({ showConfirmation: true });
  }


  render() {
    return (
      <div className="form">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              { this.state.showConfirmation ? <Confirmation /> :
                <form onSubmit={this.props.onFormSubmit} className="form__inputs">
                  <div className="input" >
                    <label>Name</label>
                    <input name="name" onChange={this.handleChange} value={this.state.name} />
                  </div>
                  <div className="input ${this.errorClass(this.state.formErrors.email)}">
                    <label>Email {this.state.formErrors.email}</label>
                    <input name="email" onChange={this.handleChange} value={this.state.email} />
                  </div>
                  <div className="input ${this.errorClass(this.state.formErrors.password)}">
                    <label>Password {this.state.formErrors.password}</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                  </div>
                  <button type="button" disabled={!this.state.formValid} onClick={this.handleSubmit} className="form__button">Sign up</button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var Signup = createReactClass({
  render: function(){
    return (
      <div className="Signup">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h2 className="page-title">Challenge #001 Sign up</h2>
            </div>
          </div>
        </div>
        <SignupForm />
      </div>
    );
  }
})


export default Signup;
