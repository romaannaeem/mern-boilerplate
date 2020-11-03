import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../App.css';

import HeaderBar from './HeaderBar';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); // fetchUser declared in actions
  }

  render() {
    return (
      <HashRouter>
        <HeaderBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignupScreen} />
      </HashRouter>
    );
  }
}

export default connect(null, actions)(App);
