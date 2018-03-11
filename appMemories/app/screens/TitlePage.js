import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Text } from 'native-base';

const TitlePage = () => {
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
        <Text style={styles.welcome}>
          Hello Nirali!{'\n'}How would you like to get started?
        </Text>

        <View style={{justifyContent: 'center'}}>
        <Button style={{ backgroundColor: '#2b5451' }} onPress={() => Actions.entry()}>
          <Text>Add Reflection</Text>
        </Button>
        <Text />
        <Button style={{ backgroundColor: '#2b5451' }} onPress={() => Actions.timeline()}>
          <Text> View Timeline </Text>
        </Button>
      </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50
    // backgroundColor: '#FF8200',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#537a7a',
    fontFamily: 'Arial',
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

export default TitlePage;
