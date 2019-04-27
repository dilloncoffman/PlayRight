import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';

class SignInScreen extends Component {
  static navigationOptions = {
    // to style sign-in screen header
  };

  state = {
    username: '',
    password: '',
    user: {}, // user object to be set after signIn()
  };

  // updates state given user input
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }

  // signs a user in and redirects them to Home screen
  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
      // user object returned from signIn()
      .then(user => {
        this.setState({ user }); // find a way to set this state in App, that way the app as a whole has access to this returned user object
        console.log('Successful sign in!');
        this.props.navigation.navigate('Home'); // navigate to home screen
      })
      .catch(error => console.log('Error signing in!: ', error));
    // TODO: display error message to the user
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate('ForgotPassword')}
        >
          Forgot your password?
        </Text>
        <Button title="Sign In" onPress={this.signIn.bind(this)} />
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          Don't have an account? Sign up
        </Text>
      </View>
    );
  }
}

export default SignInScreen;

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
});
