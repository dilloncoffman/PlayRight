import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this.loadApp();
  }

  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
    headerTitleStyle: {
      color: '#1C202C',
    },
    headerStyle: {
      backgroundColor: '#1C202C',
      borderBottomWidth: 0, // gets rid of hairline border bottom on header
    },
  };

  // check if user's token is available in local storage or not
  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth'); // determines whether to navigate to App or Auth
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}
export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A3141',
  },
});
