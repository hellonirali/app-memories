import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Navbar } from '../components/index';
import axios from 'axios';

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
    console.log(memories)
    return (
      <View>
      <Navbar title={'Timeline'} />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});
