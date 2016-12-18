import React, { Component } from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import fetchDataContainer from '../containers/fetchDataContainer';
import CrimeByTeam from './CrimeByTeam';


class Home extends Component{
  constructor(props) {
    super(props)
  }

  nflData() {
    fetch('http://nflarrest.com/api/v1/team', {method: "GET"})
      .then((response) => response.json())
      .then((responseJson) => {
        return this.props.fetchAllData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
    let data = this.props.allData.allData
    if (!data) {
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          <TouchableHighlight onPress={() => this.nflData()}>
            <Text>Get Data</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          <TouchableHighlight onPress={() => this.nflData()}>
            <Text>Get Data</Text>
          </TouchableHighlight>
          <ScrollView
            style={styles.scrollView}>
            {data.map(function(crime, i) {
              return <CrimeByTeam key={i} crime={crime} />}
            )}
          </ScrollView>
        </View>
      )
    }
  }
}

export default fetchDataContainer(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  scrollView: {
    top: 20,
    height: 400,
  }
})
