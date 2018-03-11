import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Navbar } from '../components/index';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8080/api/memories')
    .then(res => res.data)
    .then(memories => {
      this.setState({ memories });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const memories = this.state.memories;

    return (
      <ScrollView>
      {memories.map(memory => (
        <View key={memory.id}>
        <Text style={styles.headTitle}>
        {memory.title}
        </Text>
        <Text />

        <Text style={styles.title}>
        Date:
        </Text>
        <Text style={styles.item}>
          {memory.date.slice(5, 7)}-{memory.date.slice(8, 10)}-{memory.date.slice(0, 4)}
        </Text>
        <Text />

        <Text style={styles.title}>
          Mood:
        </Text>
        <Text style={styles.item}>
          {memory.mood}
        </Text>
        <Text />

        <Text style={styles.title}>
          Entry:
        </Text>
        <Text style={styles.item}>
          {memory.entry}
        </Text>
        <Text />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        </View>
      ))}
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   item: {
     fontSize: 18,
   },
   title: {
     fontSize: 18,
     fontWeight: 'bold'
   },
   headTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
   }
});
