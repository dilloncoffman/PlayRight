import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';

class SignInScreen extends Component {
  static navigationOptions = {
    // to style Home Screen-specific header
    title: 'Welcome',
  };

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'username'); // stores user token

    this.props.navigation.navigate('App'); // navigate to home screen
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={this.signIn} />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A3141',
  },
});
