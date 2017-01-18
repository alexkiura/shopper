import React, {Component} from 'react';
import {AppRegistry, Navigator, StyleSheet, View} from 'react-native';
import OrderList from './OrderList';
import OrderForm from './OrderForm.js';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Shopper extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: [
        {
          description: 'Spinach'
        }, {
          description: 'Strawberries'
        }, {
          description: 'Rice'
        }
      ]
    }
  }

  onSubmitItem(item) {
    this.nav.pop()
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'orderForm':
        return (<OrderForm onAdd={this.onSubmitItem.bind(this)} />);
      default:
        return (
          <View style={styles.container}>
            <OrderList
              orders={this.state.items}
            />
            <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            onPress={this.addOrder.bind(this)}
            title="Add item"
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
        )
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
  }

  addOrder() {
    console.log('Order added');
    this.nav.push({
      name: 'orderForm',
    });
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{name: 'orderList', index: 0}}
        ref={(nav) => {
          this.nav = nav;
        }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  actionButton: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('shopper', () => Shopper);
