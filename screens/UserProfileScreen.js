import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class UserProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>User Profile Screen</Text>
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
