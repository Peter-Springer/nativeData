import React, { Component } from 'react'
import {
 Image,
 StyleSheet,
 Text,
 TextInput,
 TouchableHighlight,
 View,
} from 'react-native';
import Immutable from 'immutable'

import getUserContainer from '../containers/getUserContainer'

class Profile extends Component {
 constructor(props) {
   super (props)
   this.state = {
     user: '',
   }
 }

 changeUserName() {
   let userData = this.props.user.set('name', this.state.user)
   this.props.getUser(userData)
   this.setState({ user: '' });
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
        <TextInput
          style={styles.userInput}
          onChangeText={user => this.setState({ user })}
          value={ this.state.user }
          placeholder='Change User Name'
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.changeUserName.bind(this)}>
          <Text style={styles.buttonText}>Change Username</Text>
        </TouchableHighlight>
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
  },
  userInput: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
    height: 30,
    padding: 5,
    marginTop: 20,
    marginBottom: 10,
    width: 250,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'DamascusBold',
    color: '#fff',
  },
})
