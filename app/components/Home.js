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

  nflData(arg1='', arg2='') {
    fetch(`http://nflarrest.com/api/v1/team/${arg1}/${arg2}`, {method: "GET"})
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
          <TouchableHighlight onPress={() => this.nflData()}>
            <Text>Get Data</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          <TouchableHighlight onPress={() => this.nflData('topPlayers', 'den')}>
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
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    top: 20,
    height: 400,
  }
})
