import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ArtistProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Artist Profile Screen</Text>
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
