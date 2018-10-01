import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBP5Sk5TkWRwiJbGgpOelXxXKaj1u6XX8M",
      authDomain: "authentication-4544f.firebaseapp.com",
      databaseURL: "https://authentication-4544f.firebaseio.com",
      projectId: "authentication-4544f",
      storageBucket: "authentication-4544f.appspot.com",
      messagingSenderId: "971320507794"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
