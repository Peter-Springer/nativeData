import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

export default class PlayerArrestChart extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.playerChart}>
        {this.props.players.map(function(player, i) {
          let arrestCountHeight = parseInt(player.arrest_count)
          if(arrestCountHeight >= 4) {
            scoreColor = '#8f0000'
          }
          if(arrestCountHeight == 3) {
            scoreColor = '#ff0000'
          }
          if(arrestCountHeight == 2) {
            scoreColor = '#003399'
          }
          if(arrestCountHeight == 1) {
            scoreColor = '#0055ff'
          }
          return (
            <View style={styles.bookchart} key={i}>
              <Animated.View style={[{height: arrestCountHeight, backgroundColor:scoreColor}, styles.bar]}/>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  playerChart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 1,
  },
  bar: {
    width: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 2,
  },
});
