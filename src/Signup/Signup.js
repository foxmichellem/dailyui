import React from 'react';
import './Signup.css';
import './../Grid.css';
var createReactClass = require('create-react-class');


var Input = createReactClass({
  render: function(){
    return (
      <div className="input">
        <input className="input__box" id={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
});

var Modal = createReactClass({
  handleSubmit: function(e){
    console.log('handled');
  },


  render: function(){
    return (
      <div className="modal">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <form onSubmit={this.props.onFormSubmit} className="modal__form">
                <Input id="name" type="text" placeholder="Full name" onChange={this.handleChange} />
                <Input id="email" type="email" placeholder = "Email" onChange={this.handleChange} />
                <Input id="password" type="password" placeholder = "Password" onChange={this.handleChange} />
                <Input id="password-confirm" type="password" placeholder = "Password" onChange={this.handleChange} />
                <button onClick={this.handleSubmit} className="modal__button">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

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
