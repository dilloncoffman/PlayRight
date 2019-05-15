import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';

class ForgotPasswordScreen extends Component {
  state = {
    username: '',
    confirmationCode: '',
    new_password: '',
    confirmationSent: false,
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }

  forgotPassword = () => {
    const { username } = this.state;
    Auth.forgotPassword(username)
      .then(() => {
        console.log('Confirmation message sent..');
        this.setState({
          confirmationSent: true,
        });
      })
      .catch(err => {
        console.log(err);
        // TODO Show error message to user (username does not exist, password matches old password etc.)
      });
  }

  confirmNewPassword = () => {
    // eslint-disable-next-line camelcase
    const { username, confirmationCode, new_password } = this.state;
    // eslint-disable-next-line react/prop-types
    const { navigate } = this.props.navigation;
    Auth.forgotPasswordSubmit(username, confirmationCode, new_password)
      .then(() => {
        navigate('SignIn'); // redirect to SignIn
      })
      .catch(err => {
        console.log(err);
        // TODO Show error message to user (invalid confirmation code)
      });
  }

  static renderConfirmationMessage() {
    return (
      <Text style={styles.confirmationText}>Confirmation code sent...</Text>
    );
  }

  render() {
    const { confirmationSent } = this.state;

    return (
      <View style={styles.container}>
        <Text styles={styles.text}>Enter your username</Text>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder="Username"
        />
        <Button title="Reset" onPress={this.forgotPassword} />
        { confirmationSent && this.constructor.renderConfirmationMessage() }
        <TextInput
          onChangeText={value => this.onChangeText('new_password', value)}
          style={styles.input}
          secureTextEntry
          placeholder="New password"
        />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder="Confirmation Code"
        />
        <Button title="Confirm" onPress={this.confirmNewPassword} />
      </View>
    );
  }
}

export default ForgotPasswordScreen;

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
  },
  text: {
    color: '#E7E8E9',
  },
  confirmationText: {
    color: 'orange',
    fontSize: 20,
  },
});
