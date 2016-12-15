import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Auth0Lock from 'react-native-lock';
import testContainer from '../containers/testContainer';
import actionTwoContainer from '../containers/actionTwoContainer';
let credentials = require('../../credentials');
let lock = new Auth0Lock(credentials);

 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: 'token',
    };
  }

  getHello() {
    const data = '1232323'
    this.props.sayHello(data);
    this.goodbye();
  }

  goodbye() {
    this.props.sayGoodbye();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        {this.props.greeting}
        {this.props.pizzaType}
        this is below
        </Text>
        <TouchableHighlight onPress={() => this.getHello()}>
          <Text>Click</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

  export default testContainer(actionTwoContainer(Login))

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
