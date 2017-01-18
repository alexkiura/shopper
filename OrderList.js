import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OrderRow from './Order.js';


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
      ordersDataSource: this.state.ordersDataSource.cloneWithRows(nextProps.orders),
    });
  }

  renderRow(order) {
    return (
      <OrderRow order={order} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My items</Text>
        {this.state.ordersDataSource.getRowCount() ?
          <ListView
            dataSource={this.state.ordersDataSource}
            enableEmptySections
            renderRow={this.renderRow.bind(this)}
          />
         : <Text style={styles.welcome}>It's lonely here, create an order</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 0.25,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

OrderList.propTypes = {
  orders: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default OrderList;
