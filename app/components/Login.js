import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Auth0Lock from 'react-native-lock';
import credentials from '../../credentials';
import Home from './Home';
import fetchDataContainer from '../containers/fetchDataContainer';

class Login extends Component {
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
      await AsyncStorage.setItem(this.state.uid, token)
    } catch (error) {
      console.log(error);
      return;
    }
  }

  deleteToken = async () => {
    try {
      await AsyncStorage.removeItem(this.state.uid)
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
      this.props.navigator.push({
        component: Home,
        title: 'Search for crimes',
        profile: this.state.profile,
        token: this.state.token
      });
    })
  }

  logout = async () => {
    try {
      await this.deleteToken()
      this.setState({ userToken: null, profile: null })
    } catch (error) {
      console.log(error);
    }
  }

  getItem = async () => {
    try {
      await AsyncStorage.getItem(this.state.uid, (err, result) => {
        console.log(result);
      })
    } catch (error) {
      console.log(error);
    }
  }

  getData() {
    this.props.fetchAllData('hello')
    this.nflData()
  }

  nflData() {
    fetch('http://nflarrest.com/api/v1/team', {method: "GET"})
      .then((response) => response.json())
      .then((responseJson) => {
        return console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
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
        <TouchableHighlight onPress={() => this.getData()}>
          <Text>AsyncStorage</Text>
        </TouchableHighlight>
        <Text>{this.props.allData.allData}</Text>
      </View>
    );
  }
}

  export default fetchDataContainer(Login)

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
