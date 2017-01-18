import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';


export default class OrderForm extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: '',
    }
  }

  onOrderTextChanged(text) {
    this.setState({
      item: text
    })
  }

  submitItem() {
    this.props.onAdd(this.state.item);
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.onOrderTextChanged.bind(this)}
        />
        <TouchableHighlight
          onPress={this.submitItem.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add item</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  orderInput: {
    height: 40,
    borderColor: 'gray',
  }
})

OrderForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
}