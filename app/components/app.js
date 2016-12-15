import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './login';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="login" initial={true} />
          <Scene key="home" component={Home} title="home"/>
        </Scene>
      </Router>
    )
  }
}
