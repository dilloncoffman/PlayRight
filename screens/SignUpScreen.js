/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';

class SignUpScreen extends Component {
  static navigationOptions = {
    // to style sign up screen header
    title: 'CREATE ACCOUNT',
    headerTintColor: '#FF7F4C',
  };

  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: '',
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }

  signUp() {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        name: this.state.username, // name attribute is required per AWS configuration
        email: this.state.email,
        phone_number: this.state.phone_number,
      },
    })
      .then(() => console.log('Successful sign up!'))
      .catch(error => console.log('Error signing up!: ', error));
  }

  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
      .then(() => console.log('Successful confirmation!'))
      .catch(error => console.log('Confirmation error!: ', error));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#FF7F4C"
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#FF7F4C"
        />
        <TextInput
          onChangeText={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#FF7F4C"
        />
        <TextInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FF7F4C"
        />
        <Button title="Create Account" onPress={this.signUp.bind(this)} />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder="Confirmation Code"
          placeholderTextColor="#FF7F4C"
        />
        <Button
          title="Confirmation Code"
          onPress={this.confirmSignUp.bind(this)}
        />
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2A3141',
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#E7E8E9',
    margin: 10,
  },
});
