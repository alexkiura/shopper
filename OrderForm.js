import React, { Component } from 'react';
import {
  Picker,
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
      description: '',
      quantity: '',
      unitOfMeasure: '',
    }
  }

  onOrderTextChanged(description) {
    this.setState({
      description
    })
  }

  onOrderQuantityChanged(quantity) {
    this.setState({
      quantity
    })
  }

  onOrderUnitChanged(unitOfMeasure) {
    console.log('measure', unitOfMeasure);
    this.setState({
      unitOfMeasure
    })
  }

  submitItem() {
    this.props.onAdd(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onOrderTextChanged.bind(this)}
          placeholder={"Name of item"}
          style={styles.orderInput}
        />
        <TextInput
          onChangeText={this.onOrderQuantityChanged.bind(this)}
          placeholder={"Quantity in digits"}
          style={styles.orderInput}
        />
        <Picker
          onValueChange={this.onOrderUnitChanged.bind(this)}
          selectedValue={this.state.unitOfMeasure}
          style={styles.unitPicker}
        >
          <Picker.item
            label="Kg"
            value="kg" 
          />
          <Picker.item 
            label="Litre"
            value="Ltr" 
          />
        </Picker>
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
    margin: 20,
    borderColor: 'gray',
    borderWidth: 2,
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

OrderForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
}