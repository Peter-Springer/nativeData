import React, { Component } from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  Select,
  Option,
} from 'react-native-chooser';

import fetchDataContainer from '../containers/fetchDataContainer';
import CrimeByTeam from './CrimeByTeam';


class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      team: '',

    }
  }

  selectedTeam(teamName) {
    this.setState({ team: teamName })
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
          <Select
            onSelect={this.selectedTeam.bind(this)}
            defaultText="Select A Team ..."
            style = {{borderWidth : 1, borderColor : "green"}}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
              <Option value={'den'}>Denver</Option>
              <Option value={'sea'}>Seattle</Option>
            </Select>
          <TouchableHighlight
            onPress={() => this.nflData('topPlayers', this.state.team)}
            style={styles.button}>
            <Text style={styles.buttonText}>Get Data</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => this.nflData('topPlayers', this.state.team)}
            style={styles.button}>
            <Text style={styles.buttonText}>Get Data</Text>
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
    top: 70,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    height: 30,
    width: 200,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  scrollView: {
    top: 20,
    height: 100,
    marginBottom: 10,
  }
})
