import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Auth0Lock from 'react-native-lock';

const lock = new Auth0Lock(
  {clientId: 'u7wmEreNsNdbAg54wYJ6q3kYFPiOIjMm', domain: 'alexkiura.auth0.com'});

export default class Login extends Component {
  
    render() {
      lock.show({}, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
        }
        // Authentication worked!
        console.log('Logged in with Auth0!');
});
        return (
            <View style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    padding: 20,
    borderColor: '#ff9933',
    borderWidth: 2,
    backgroundColor: '#6666ff',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  nameInput: {
    margin: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
  },
  unitPicker: {
    justifyContent:'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})