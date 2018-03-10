import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import { Navbar } from '../components';

export default class Test extends Component {
  render() {
    return (
      <Container>
        <Navbar title={'Test'} />
        <Content>
          <Card>
            <CardItem>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
