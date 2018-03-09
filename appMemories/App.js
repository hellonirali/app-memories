import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Test, Edit, Entry, SingleMemory, Timeline } from './app/screens';
import { Navbar } from './app/components';

export default class App extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <Entry />
      </View>
    );
  }
}
