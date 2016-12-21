import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Bar } from 'react-native-pathjs-charts';

import fetchTeamDataContainer from '../containers/fetchTeamDataContainer';
import fetchCrimeDataContainer from '../containers/fetchCrimeDataContainer';
import fetchPositionDataContainer from '../containers/fetchPositionDataContainer';


class TeamVisual extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  const options = {
      width: 300,
      height: 300,
      margin: {
          top: 20,
          left: 25,
          bottom: 70,
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
              fill: '#000'
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
              fill: '#000'
          }
      }
    }


    if(this.props.teamData.toJS().length > 0
    && this.props.crimeData.toJS().length > 0
    && this.props.positionData.toJS().length > 0) {
      const crimeData = [this.props.crimeData.toJS().map( data =>
        ({ name: data.Category, count: parseInt(data.arrest_count) }))]
      const teamData = [this.props.teamData.toJS().map( ({ Team_name, arrest_count }) =>
        ({ name: Team_name, count: parseInt(arrest_count) }))]
      const positionData = [this.props.positionData.toJS().map( data =>
        ({ name: data.Position, count: parseInt(data.arrest_count) }))]
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Arrests Per Team:</Text>
          <Bar
            data={teamData}
            options={options}
            accessorKey="count" />
          <Text style={styles.title}>Top 15 Arrest Categories:</Text>
          <Bar
            data={crimeData}
            options={options}
            accessorKey="count" />
          <Text style={styles.title}>Arrests Per Position:</Text>
          <Bar
            data={positionData}
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

export default fetchTeamDataContainer(fetchCrimeDataContainer(fetchPositionDataContainer(TeamVisual)))

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
  },
  title: {
    fontSize: 25,
    fontFamily: 'DamascusBold',
    marginLeft: 25,
  }
})
