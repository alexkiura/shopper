import React, { Component } from 'react';
import {
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class ConfirmationForm extends Component {
    render() {
        return(
            <View>
                <Text>Are you sure you want to make your order?</Text>
                <TextInput
                    placeholder="Enter phone number"
                    style={styles.orderInput}
                />
                <TouchableHighlight>
                    <Text>Order</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Cancel</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})