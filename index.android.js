import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import OrderList from './OrderList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class shopper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <OrderList orders={
          [
          { description: 'Match stick' },
          { description: 'Cabbages' },
          { description: 'Fruits' }]
          }
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('shopper', () => shopper);
