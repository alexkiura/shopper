import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    height: 60,
    padding: 20,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});

class Order extends Component {
  addOrder() {
    console.log('Order added');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressed={this.addOrder.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Place an order</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Order;
