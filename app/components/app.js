import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Auth0Lock from 'react-native-lock';

import credentials from '../../credentials';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null,
      profile: null,
      uid: 'uid904837920',

    };
  }

  saveToken = async (token) => {
    try {
      await AsyncStorage.setItem(uid, token)
    } catch (error) {
      console.log(error);
      return;
    }
  }

  deleteToken = async () => {
    try {
      await AsyncStorage.removeItem(uid)
    } catch (error) {
      console.log(error);
    }
  }

  login() {
    let lock = new Auth0Lock(credentials);
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      let sessionToken = JSON.stringify(token.idToken)
      this.saveToken(sessionToken);
      this.setState({ userToken: token, profile: profile });
    });
  }

  logout = async () => {
    try {
      await this.deleteToken()
      this.setState({ userToken: null, profile: null, uid: Date.now() })
    } catch (error) {
      console.log(error);
    }
  }

  getItem = async () => {
    try {
      await AsyncStorage.getItem(uid, (err, result) => {
        console.log(result);
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.userToken)
    console.log(this.state.profile)
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
        <TouchableHighlight onPress={() => this.getItem()}>
          <Text>AsyncStorage</Text>
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
