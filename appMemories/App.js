import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Edit, Entry, SingleMemory, Timeline } from './app/screens';

export default class App extends Component {
  render() {
    return (
      <View>
        <Entry />
      </View>
    );
  }
}
