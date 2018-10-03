import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBP5Sk5TkWRwiJbGgpOelXxXKaj1u6XX8M",
      authDomain: "authentication-4544f.firebaseapp.com",
      databaseURL: "https://authentication-4544f.firebaseio.com",
      projectId: "authentication-4544f",
      storageBucket: "authentication-4544f.appspot.com",
      messagingSenderId: "971320507794"
    });
    //Here, we will know if the user signs in or signs out. In other words, this eventHandler for handling
    //either signing in or signing out.
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 45, marginTop: 10 }}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
