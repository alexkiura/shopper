import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class OrderRow extends Component {
  render() {
    return (
      <View>
        <Text style={styles.orderText}>{this.props.order.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orderText: {
    fontSize: 20,
    padding: 10,
  },
});

OrderRow.propTypes = {
  order: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
  }),
};
