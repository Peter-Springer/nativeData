import React, { Component } from 'react'
import {
 Image,
 StyleSheet,
 Text,
 View,
} from 'react-native';

import getUserContainer from '../containers/getUserContainer'

class Profile extends Component {
 constructor(props) {
   super (props)
   this.state = {
   }
 }

 render() {
   const { user } = this.props.user
   if (user) {
     return (
       console.log(user),
       <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: user.picture}}/>
         <Text>{user.name}</Text>
         <Text>{user.email}</Text>
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
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
})
