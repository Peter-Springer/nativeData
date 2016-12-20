import React, { Component } from 'react'
import {
 Image,
 StyleSheet,
 Text,
 View,
} from 'react-native';
import Immutable from 'immutable'

import getUserContainer from '../containers/getUserContainer'

class Profile extends Component {
 constructor(props) {
   super (props)
   this.state = {
   }
 }

 render() {
   const user = this.props.user.toJS()
   if (user) {
     return (
       <View style={styles.container}>
        <Text style={styles.title}>Profile:</Text>
        <Image style={styles.avatar} source={{uri: user.picture}}/>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
       </View>
     )
   } else {
     return (
       <View style={styles.container}>
         <Text>No User Account Located</Text>
       </View>
     )
   }
 }
}

export default  getUserContainer(Profile)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'DamascusBold',
    fontSize: 60,
    color: '#FF0000',
    marginBottom: 30,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    color: '#003399',
    fontFamily: 'DamascusBold',
    fontSize: 30,
    marginTop: 30,
  },
  userEmail: {
    color: '#003399',
    fontFamily: 'Damascus',
    fontSize: 15,
    marginTop: 10,
  }
})
