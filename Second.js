/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';

export default class Second extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
        Second
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ebee',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
