import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreateScreen extends Component {
  static navigationOptions = {
    // to style Home Screen-specific header
    title: 'Innovate',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Create Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C202C',
  },
});
