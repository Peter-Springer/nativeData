import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

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
      </View>
    )
  }
}
