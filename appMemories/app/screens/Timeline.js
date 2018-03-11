
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Icon, Left, Right, Image} from 'native-base';
import { ImageBackground } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';



export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { memories: [] };
  }

  componentDidMount() {
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
    const months = ['months', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <ImageBackground
      style={{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
      }}
      source={require('./timelineBackground3.jpg')}
      >
      <Container style={{ flex: 1 }}>
        <Content style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Button style={{ backgroundColor: '#2b5451' }} block
            onPress={() => Actions.entry()}>
            <Text>Add Reflection</Text>
          </Button>
          {memories.map(memory => (
            <Card key={memory.id}>
              <CardItem>
              <Left>
              <Body style={{ justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#2b5451' }}>{memory.title}</Text>
                <Text note style={{ textAlign: 'center' }}>{memory.date.slice(5, 7)}-{memory.date.slice(8, 10)}-{memory.date.slice(0, 4)}</Text>
                </Body>
                </Left>
              </CardItem>
              <CardItem>
              <Left>
                  <Text>{memory.entry}</Text>
                  </Left>
              </CardItem>
              <CardItem>
              <Left>
                <Text style={{fontWeight: 'bold'}}>Mood: {memory.mood}</Text>
                </Left>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
      </ImageBackground>
    );
  }
}

// 'https://i.pinimg.com/564x/fb/f5/6b/fbf56b57b1de0f4f23d6f6d0925f0e1b.jpg'
// backgroundColor: '#b6e9de'
