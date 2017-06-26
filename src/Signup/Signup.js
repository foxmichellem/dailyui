import React from 'react';
import './Signup.css'


var Input = React.createClass({
  render: function(){
    return (
      <div className="input">
        <input id={this.props.name} required type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
});

var Modal = React.createClass({
  render: function(){
    return (
      <div className="modal">
        <form onSubmit={this.props.onFormSubmit} className="modal">
          <Input id="name" type="text" placeholder="Full name" />
          <Input id="email" type="email" placeholder = "Email" />
          <Input id="password" type="password" placeholder = "Password" />
          <Input id="password-confirm" type="password" placeholder = "Password" />
          <button>Sign up</button>
      </div>
    );
  }
})

var Signup = React.createClass({
  render: function(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>This is the signup page</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
})


export default Signup;
