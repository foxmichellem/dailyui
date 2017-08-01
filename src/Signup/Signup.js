import React, { Component } from 'react';
import './Signup.css';
import './../Grid.css';
var createReactClass = require('create-react-class');


class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
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

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <div className="modal">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <form onSubmit={this.props.onFormSubmit} className="modal__form">
                <div className="input">
                  <input className="input__box" placeholder="Full name" name="name" novalidate onChange={this.handleChange} value={this.state.name} />
                </div>
                <div className="input">
                  <input className="input__box" placeholder="Email" name="email" novalidate onChange={this.handleChange} value={this.state.email} />
                </div>
                <div className="input">
                  <input className="input__box" type="password" placeholder="Password" name="password" novalidate onChange={this.handleChange} value={this.state.password} />
                </div>
                <button onClick={this.handleSubmit} className="modal__button">Sign up</button>
              </form>
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
        <Modal />
      </div>
    );
  }
})


export default Signup;
