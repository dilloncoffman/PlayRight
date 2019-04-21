import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, AsyncStorage } from 'react-native';

export default class HomeScreen extends Component {
  signOut = async () => {
    await AsyncStorage.clear(); // clears anything stored in AsyncStorage

    this.props.navigation.navigate('AuthLoading'); // navigate to AuthLoading which will determine if user is signed in or not
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Tab"
          onPress={() => this.props.navigation.navigate('Tab')}
        />
        <Button
          title="Artist Profile"
          onPress={() => this.props.navigation.navigate('ArtistProfile')}
        />
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A3141',
  },
});
