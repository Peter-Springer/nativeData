import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import fetchDataContainer from '../containers/fetchDataContainer';
import PlayerArrestChart from './PlayerArrestChart';

class Visuals extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    if (!this.props.allData.allData) {
      return (
        <View>
          <Text>Pick Team To See Graph</Text>
        </View>
      )
    }
    return (
      <View style={styles.visuals}>
        <Text>Players per Arrest Count</Text>
        <PlayerArrestChart
          style={styles.chart}
          players={this.props.allData.allData}
        />
      </View>
    )
  }
}

export default fetchDataContainer(Visuals);

const styles = StyleSheet.create({
  visuals: {
    flex: 1,
    marginTop: 100,
  },
  chart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
  },
})
