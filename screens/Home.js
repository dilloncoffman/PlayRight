import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    // to style Home Screen-specific header
    title: 'Home',
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
