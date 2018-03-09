import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Subtitle } from 'native-base';
export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
