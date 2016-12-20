import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Pie } from 'react-native-pathjs-charts';

import fetchTeamDataContainer from '../containers/fetchTeamDataContainer'

class TeamVisual extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data = [{
        "name": "Alagoas",
        population : "1962903"
    }, {
        "name": "Maranhão",
        population : "2805387"
    }, {
        "name": "São Paulo",
        population : "6460102"
    }, {
        "name": "Goiás",
        population : "4157509"
    }, {
        "name": "Sergipe",
        population : "2637097"
    }, {
        "name": "Rondônia",
        population : "3552899"
    }]

    let options = {
      margin: {
        top: 20,
        left: 10,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'bottom',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    };


    if(this.props.teamData) {
      let teamData = this.props.teamData.toJS().map( data =>  Object.create({ name: data.Team_name, count: parseInt(data.arrest_count) }))
      return (
      <ScrollView style={styles.container}>
        <Pie
          data={teamData}
          options={options}
          accessorKey="count" />
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Could Not Fetch Data</Text>
        </View>
      )
    }
  }
}

export default fetchTeamDataContainer(TeamVisual)

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
