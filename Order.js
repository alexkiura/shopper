import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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
  actionButton: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

class Order extends Component {
  addOrder() {
    console.log('Order added');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            onPress={this.addOrder.bind(this)}
            title="New item"
          >
            <Icon name="md-create"
              style={styles.actionButton}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            onPress={this.addOrder.bind(this)}
            title="Order items"
          >
            <Icon name="md-done-all"
              style={styles.actionButton}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

export default Order;
