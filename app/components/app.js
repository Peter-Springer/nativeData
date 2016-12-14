import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Auth0Lock from 'react-native-lock';
let credentials = require('../../credentials');
let lock = new Auth0Lock(credentials);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userToken: 'token',
    };
  }

  login() {
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ userToken: token });
      console.log(this.state.userToken);
      console.log(profile);
    });
  }

  logout() {
    console.log('logout');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          HELLO
        </Text>
        <TouchableHighlight onPress={() => this.login()}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.logout()}>
          <Text>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
