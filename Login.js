import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                  placeholder="First name"
                  style={styles.nameInput}
                />
                <TextInput
                  placeholder="Last name"
                  style={styles.nameInput}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.nameInput}
                />
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Join</Text>
                </TouchableHighlight>
            </View>
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