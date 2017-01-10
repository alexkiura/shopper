import React, { Component } from 'react';
import {
  ListView,
  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


class OrderList extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      orders: [],
      ordersDataSource: dataSource.cloneWithRows(props.orders),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ordersDataSource: this.ordersDataSource.cloneWithRows(nextProps.orders),
    });
  }

  addOrder() {
    console.log('Order added');
  }

  renderRow(order) {
    return (
      <Text>
        {order.description}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>No orders placed yet</Text>
        <ListView
          dataSource={this.state.ordersDataSource}
          enableEmptySections
          renderRow={(order) => <Text>{order.description}</Text>}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            onPress={this.addOrder.bind(this)}
            title="New order"
          >
            <Icon name="md-create"
              style={styles.actionButton}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            onPress={this.addOrder.bind(this)}
            title="Place order"
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

OrderList.propTypes = {
  orders: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default OrderList;
