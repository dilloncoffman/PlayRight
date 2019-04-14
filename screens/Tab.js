import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TabScreen extends Component {
  static navigationOptions = {
    // to style Tab Screen-specific header
    title: 'Tab',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tab Screen</Text>
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
  text: {
    color: '#fff',
  },
});
