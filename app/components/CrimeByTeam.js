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
        <Text>{crime.Team} {crime.Team_name}</Text>
        <Text>Arrest Count: {crime.arrest_count}</Text>
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
  }
})
