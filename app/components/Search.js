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

import fetchTeamDataContainer from '../containers/fetchTeamDataContainer';
import fetchPositionDataContainer from '../containers/fetchPositionDataContainer';
import fetchCrimeDataContainer from '../containers/fetchCrimeDataContainer';
import fetchDataContainer from '../containers/fetchDataContainer';
import CrimeByTeam from './CrimeByTeam';
import DropDownArray from '../DropDownArray';


class Search extends Component{
  constructor(props) {
    super(props)
    this.state = {
      team: '',
    }
  }

  componentDidMount() {
    fetch(`http://nflarrest.com/api/v1/team/`, {method: "GET"})
      .then((response) => response.json())
      .then((responseJson) => {
        return this.props.fetchTeamData(responseJson);
      })
      .catch((error) => {
        console.error(error);
    });

      fetch(`http://nflarrest.com/api/v1/crime/`, {method: "GET"})
        .then((response) => response.json())
        .then((responseJson) => {
          return this.props.fetchCrimeData(responseJson);
        })
        .catch((error) => {
          console.error(error);
    });

    fetch(`http://nflarrest.com/api/v1/position/`, {method: "GET"})
      .then((response) => response.json())
      .then((responseJson) => {
        return this.props.fetchPositionData(responseJson);
      })
      .catch((error) => {
        console.error(error);
  });
  }

  selectedTeam(teamName) {
    this.setState({ team: teamName })
  }

  nflData(arg1='') {
    fetch(`http://nflarrest.com/api/v1/team/arrests/${arg1}`, {method: "GET"})
      .then((response) => response.json())
      .then((responseJson) => {
        return this.props.fetchAllData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
    let data = this.props.allData.toJS()
    // let teamData = this.props.teamData.toJS()
    if (!data) {
      return (
        <View style={styles.container}>
          <Select
            onSelect={this.selectedTeam.bind(this)}
            defaultText="Select A Team ..."
            style = {{borderWidth : 1, borderColor : "#ff0000"}}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
              {DropDownArray.map((team, i) =>
                <Option value={team.id} key={i}>{team.name}</Option>)}
            </Select>
          <TouchableHighlight
            onPress={() => this.nflData(this.state.team)}
            style={styles.button}>
            <Text style={styles.buttonText}>Get Data</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Select
            onSelect={this.selectedTeam.bind(this)}
            defaultText="Select A Team ..."
            style = {{borderWidth : 1, borderColor : "#ff0000"}}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
              {DropDownArray.map((team, i) =>
                <Option value={team.id} key={i}>{team.name}</Option>)}
            </Select>
          <TouchableHighlight
            onPress={() => this.nflData(this.state.team)}
            style={styles.button}>
            <Text style={styles.buttonText}>Get Data</Text>
          </TouchableHighlight>
          <ScrollView
            style={styles.scrollView}>
            {data.map((crime, i) =>
              <CrimeByTeam key={i} crime={crime} />
            )}
          </ScrollView>
        </View>
      )
    }
  }
}

export default fetchDataContainer(
  fetchTeamDataContainer(
    fetchCrimeDataContainer(
      fetchPositionDataContainer(Search)
    )
  )
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 70,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 200,
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
    height: 50,
    marginBottom: 10,
  }
})
