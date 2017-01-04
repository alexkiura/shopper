import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Order from './Order';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

export default class shopper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Order />
      </View>
    );
  }
}


AppRegistry.registerComponent('shopper', () => shopper);
