import React, { Component } from 'react';
import { Container, Content, Form, Item, Text, Input, Label, Button } from 'native-base';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';
import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class Entry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      title: '',
      mood: '',
      entry: '',
      isDateTimePickerVisible: false,
      showDate: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.timelineScreen = this.timelineScreen.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8080/api/memories', {
      date: this.state.date,
      entry: this.state.entry,
      mood: this.state.mood,
      title: this.state.title
    })
      .then(() => {
        this.setState({
          date: '',
          title: '',
          mood: '',
          entry: '',
          isDateTimePickerVisible: false,
          showDate: false
        });
        this.titleInput._root.clear();
        this.moodInput._root.clear();
        this.entryInput._root.clear();
      })
      .then(function (response) {
        Actions.timeline()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  timelineScreen() {
    Actions.timeline()
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({ date: date, showDate: true })
    this._hideDateTimePicker();
  };

  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        source={require('./entryBackground.png')}
      >
        <Container>
          <Content>
            <Form>

              <View style={{ flex: 1 }}>

                <Button transparent dark onPress={this._showDateTimePicker}>
                  <Text style={{ color: '#585858', paddingLeft: 15 }}>Select Date</Text>
                </Button>

                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
                {this.state.showDate && <Text style={{ paddingLeft: 15 }}>{this.state.date.toString().slice(0, 16)}</Text>}
              </View>

              <Item floatingLabel>
                <Label>Title</Label>
                <Input
                  getRef={input => { this.titleInput = input; }}
                  onChangeText={(text) => this.setState({ title: text })}
                  value={this.state.title} />
              </Item>

              <Item floatingLabel>
                <Label>Mood</Label>
                <Input
                  getRef={input => { this.moodInput = input; }}
                  onChangeText={(text) => this.setState({ mood: text })} value={this.state.mood} />
              </Item>

              <Item floatingLabel last>
              <Label>Entry</Label>
              <Input
                getRef={input => { this.entryInput = input; }}
                onChangeText={(text) => this.setState({ entry: text })}
                value={this.state.entry} />
            </Item>
            </Form>
            <Text />
            <Text />
            <View style={{ paddingLeft: 130 }}>
              <Button style={{ backgroundColor: '#2b5451' }} onPress={this.handleSubmit}>
                <Text>Add Reflection</Text>
              </Button>
              <Text />
              <Button style={{ backgroundColor: '#2b5451' }} onPress={() => Actions.timeline()}>
                <Text> View Timeline </Text>
              </Button>
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}
