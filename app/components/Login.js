import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View} from 'react-native';
import Auth0Lock from 'react-native-lock';
import credentials from '../../credentials';
import Profile from './Profile';
import fetchDataContainer from '../containers/fetchDataContainer';
import getUserContainer from '../containers/getUserContainer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null,
      profile: null,
      uid: 'uid904837920',

    };
  }

  saveProfile = async (profile) => {
      let userProfile = JSON.stringify(profile)
    try {
      await AsyncStorage.setItem(this.state.uid, userProfile)
    } catch (error) {
      console.log(error);
      return;
    }
  }

  deleteProfile = async () => {
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
      this.saveProfile(profile);
      this.props.getUser(profile);
      this.props.navigator.push({
        component: Profile,
        title: 'Search for crimes',
        profile: this.state.profile,
        token: this.state.token
      });
    })
  }

  logout = async () => {
    try {
      await this.deleteProfile()
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

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/nflLogo.gif')}/>
        <Text style={styles.welcome}>
          {"CRIME DOESN'T PLAY"}
        </Text>
        <TouchableHighlight style={styles.button} onPress={() => this.login()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

  export default getUserContainer(fetchDataContainer(Login))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: 275,
    width: 209,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#003399',
    fontFamily: 'Damascus',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 75,
    width: 250,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'DamascusBold',
    color: '#fff'
  }
});
