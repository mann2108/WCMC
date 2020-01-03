/// Practical 2 (Adding Two Nos)

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToastAndroid
} from "react-native";

class Inputs extends Component {
  state = {
    number1: "",
    number2: ""
  };

  handleNo1 = text => {
    this.setState({ number1: text });
  };
  handleNo2 = text => {
    this.setState({ number2: text });
  };
  add = (number1, number2) => {
    //alert(parseInt(number1) + parseInt(number2));
    var sum = parseFloat(number1) + parseFloat(number2);
    var sumText = sum.toString();
    ToastAndroid.show("The Sum is: " + sumText, ToastAndroid.LONG);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}> ADDITION OF TWO NUMBERS </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter First Number"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleNo1}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Second Number"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleNo2}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.add(this.state.number1, this.state.number2)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    alignItems: "center"
  },
  submitButton: {
    backgroundColor: "#000000",
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: "center"
  },
  submitButtonText: {
    color: "white",
    alignItems: "center"
  },
  textCenter: {
    margin: "50%"
  }
});
