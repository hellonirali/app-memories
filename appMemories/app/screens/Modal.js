import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Modal = () => {
  return (
    <ImageBackground
    style={{
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }}
    source={require('./background.png')}
    >
      <View style={styles.container}>
      <Text style={styles.title}>Reflection</Text>
        <Text
          style={styles.welcome}
          onPress={() => Actions.entry()}
        >
          Welcome Nirali!{'\n'}Would you like to get started with a reflection?
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60
    // backgroundColor: '#FF8200',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#537a7a',
    fontFamily: 'Avenir-Light',
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    margin: 10,
    color: '#537a7a',
    fontWeight: 'bold',
    fontFamily: 'Georgia'
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10
  }
});

export default Modal;
