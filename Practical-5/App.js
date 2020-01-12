import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  BackHandler
} from "react-native";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loginFailCount: 0,
    disabledLoginButton: false,
    Message: "",
    backGroundColor: ""
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  cancel = (email, pass) => {
    BackHandler.exitApp();
  };
  login = (email, pass) => {
    if (email == "17it051@charusat.edu.in" && pass == "1234567890") {
      this.setState({ loginFailCount: 0 });
      this.setState({ Message: "LOGIN SUCESSFULL" });
      this.setState({ backGroundColor: "green" });
    } else {
      this.setState({ backGroundColor: "red" });
      if (this.state.loginFailCount == 2) {
        this.setState({ disabledLoginButton: true });
        this.state.loginFailCount == 0;
        this.setState({ Message: "NO USER EXIST : LOGIN DISABLED" });
      } else {
        this.setState({ loginFailCount: this.state.loginFailCount + 1 });
        var temp = this.state.loginFailCount;
        var leftChances = 3 - temp - 1;
        leftChances.toString();
        this.setState({
          Message: "NO USER EXIST : " + leftChances + " CHANCES LEFT"
        });
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.login}>
          <Text style={styles.title}> LOGIN FORM </Text>
        </TouchableOpacity>

        <Text
          style={{
            backgroundColor: this.state.backGroundColor,
            padding: 10,
            margin: 10,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "bold"
          }}
        >
          {this.state.Message}
        </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />

        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => this.login(this.state.email, this.state.password)}
            disabled={this.state.disabledLoginButton}
          >
            <Text style={styles.submitButtonText}> LOGIN </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.cancel(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}> CANCEL </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#000000",
    padding: 10,
    margin: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  container: {
    paddingTop: 23,
    backgroundColor: "#ffffe0",
    flex: 1
  },
  input: {
    margin: 10,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center"
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButtonText: {
    color: "#ffffff",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000000",
    borderRadius: 10,
    margin: 10,
    fontSize: 15,
    fontWeight: "bold"
  }
});
