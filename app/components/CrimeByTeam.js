import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CrimeByTeam extends Component {
  constructor (props) {
    super(props);

  }

  render() {
    const { crime } = this.props
    return (
      <View style={styles.crimeData}>
        <Text>Player Name: {crime.Name}</Text>
        <Text>Crime: {crime.Category}</Text>
        <Text>Date: {crime.Date}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  crimeData: {
    flex: 1,
    padding: 10,
    margin: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 300,
  }
})
