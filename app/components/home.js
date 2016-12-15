import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  logout() {
    console.log('logout');
  }

  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.login}>This is the home page!</Text>
        <TouchableHighlight onPress={() => this.logout()}>
          <Text>Logout</Text>
        </TouchableHighlight>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
