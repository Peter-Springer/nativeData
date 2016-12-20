import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Bar } from 'react-native-pathjs-charts';

import fetchTeamDataContainer from '../containers/fetchTeamDataContainer'

class TeamVisual extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  let options = {
      width: 300,
      height: 250,
      margin: {
          top: 20,
          left: 25,
          bottom: 50,
          right: 100
      },
      color: '#003399',
      gutter: 3,
      animate: {
          type: 'oneByOne',
          duration: 200,
          fillTransition: 3
      },
      axisX: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: true,
          orient: 'bottom',
          label: {
              fontFamily: 'Arial',
              fontSize: 8,
              fontWeight: true,
              fill: '#34495E'
          }
      },
      axisY: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'left',
          label: {
              fontFamily: 'Arial',
              fontSize: 8,
              fontWeight: true,
              fill: '#34495E'
          }
      }
    }


    if(this.props.teamData) {
      let array = []
      let teamData = this.props.teamData.toJS().map( data =>  Object.create({ name: data.Team_name, count: parseInt(data.arrest_count) }))
      array.push(teamData)
      return (
        <ScrollView style={styles.container}>
        <Bar
          data={array}
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
