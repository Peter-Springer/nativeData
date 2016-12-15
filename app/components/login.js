import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Auth0Lock from 'react-native-lock';
let credentials = require('../../credentials');
let lock = new Auth0Lock(credentials);

export default class Login extends Component {
  constructor(props) {
    super(props);
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

  goToHomePage() {
    return Actions.home({text: 'Hello World!'});
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
        <TouchableHighlight>
          <Text onPress={() => this.goToHomePage()}>This is the login page!</Text>
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
