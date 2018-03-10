import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Subtitle } from 'native-base';
export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
            Back
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
