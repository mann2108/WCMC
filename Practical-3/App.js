/// Practical 3 (Toast after certain time interval)

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Alert
} from "react-native";

function getTime() {
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  var timeData =
    "Time(H:M:S) : " +
    hours.toString() +
    ":" +
    min.toString() +
    ":" +
    sec.toString();
  ToastAndroid.showWithGravity(
    timeData,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
}
let timerId = setInterval(() => getTime(), 5000);

class Inputs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Toast after every five seconds !! </Text>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: "#ffffff",
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: "center"
  }
});
