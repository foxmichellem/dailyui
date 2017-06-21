import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import { Route, Switch, Link } from 'react-router-dom'

const Navigation = () => (
  <div className="sidebar">
    <h2>UI Components</h2>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/signup'>Signup</Link></li>
    </ul>
  </div>
)

const Main = () => (
  <div className="content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}
export default App;
