import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RegisteredCustomers from './components/RegisteredCustomers';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/customers" component={ RegisteredCustomers }/>
        <Route path="/sign-up" component={ SignUp }/>
        <Route path="/login" component={ Login }/>
        <Route exact path="/" component={ Home }/>  
      </Switch>
    );
  }

}

export default App;
