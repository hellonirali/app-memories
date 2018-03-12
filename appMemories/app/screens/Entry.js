// import React, { Component } from 'react';
// import { View, StyleSheet, Button, Text, ImageBackground } from 'react-native';
// import axios from 'axios';
// import t from 'tcomb-form-native';
// import { Actions } from 'react-native-router-flux';

// const Form = t.form.Form;

// const Memory = t.struct({
//   date: t.Date,
//   title: t.String,
//   mood: t.String,
//   entry: t.String,
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 10
//     },
//   },
//   controlLabel: {
//     normal: {
//       color: 'black',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     // the style applied when a validation error occours
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }

// const options = {
//   fields: {
//     title: {
//       error: 'Title required',
//       placeholder: 'Subject',
//     },
//     mood: {
//       error: 'Mood required',
//       placeholder: 'How are you feeling?'
//     },
//     entry: {
//       error: 'Entry required',
//       placeholder: 'Describe your memory'
//     },
//   },
//   stylesheet: formStyles,
// };

// export default class Entry extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       memories: {}
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.timelineScreen = this.timelineScreen.bind(this)
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8080/api/memories', {
//       date: this._form.getValue().date,
//       entry: this._form.getValue().entry,
//       mood: this._form.getValue().mood,
//       title: this._form.getValue().title
//     })
//     .then(function (response) {
//       Actions.timeline()
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   timelineScreen = () => Actions.timeline()

//   render() {
//     return (
//       <ImageBackground
//     style={{
//       flex: 1,
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       // justifyContent: 'center',
//     }}
//     source={require('./entryBackground.png')}
//     >
//       <View style={styles.container}>
//       <Text />
//         <Form
//           ref={c => this._form = c}
//           type={Memory}
//           options={options}
//         />
//         <Button
//           title="Add Reflection"
//           onPress={this.handleSubmit}
//         />
//         <Button
//         title="Timeline"
//         onPress={this.timelineScreen}
//       />
//         </View>
//         </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     // flex: 1,
//     alignItems: 'center',
//     // marginTop: 50,
//     // padding: 20,
//     // backgroundColor: '#e9f3f6',
//   },
//   title: {
//     fontSize: 34,
//     textAlign: 'center',
//     margin: 10,
//     color: '#4e6b89',
//     fontWeight: 'bold',
//     paddingTop: 60
//     // textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     // textShadowOffset: {width: -1, height: 1},
//     // textShadowRadius: 10
//   }
// });


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'flex-start',
// //     alignItems: 'center',
// //     paddingTop: 60
// //     // backgroundColor: '#FF8200',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //     color: '#537a7a',
// //     fontFamily: 'Avenir-Light',
// //     textShadowColor: 'rgba(255, 255, 255, 0.75)',
// //     textShadowOffset: {width: -1, height: 1},
// //     textShadowRadius: 10
// //   },
// //   title: {
// //     fontSize: 34,
// //     textAlign: 'center',
// //     margin: 10,
// //     color: '#537a7a',
// //     fontWeight: 'bold',
// //     fontFamily: 'Georgia'
// //     // textShadowColor: 'rgba(0, 0, 0, 0.75)',
// //     // textShadowOffset: {width: -1, height: 1},
// //     // textShadowRadius: 10
// //   }
// // });


// --------


import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Form, Item, Text, Input, Label, Button } from 'native-base';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';
import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class Entry extends Component {
  constructor(props) {
    super(props);
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

  handleSubmit(event){
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
    Actions.timeline() }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({date: date, showDate: true})
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

              <View style={{ flex: 1}}>

                <Button transparent dark onPress={this._showDateTimePicker}>
                  <Text style={{ color: '#' }}>Select Date</Text>
                </Button>

                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
                {this.state.showDate && <Text style={{ paddingLeft: 20}}>{this.state.date.toString().slice(0,16)}</Text>}
              </View>


              <Item floatingLabel>
                <Label>Title</Label>
                <Input
                getRef={input => { this.titleInput = input; }}
                onChangeText={(text) => this.setState({title: text})} value={this.state.title} />
              </Item>

              <Item floatingLabel last>
                <Label>Mood</Label>
                <Input
                getRef={input => { this.moodInput = input; }}
                onChangeText={(text) => this.setState({mood: text})} value={this.state.mood} />
              </Item>

              <Item floatingLabel last>
                <Label>Entry</Label>
                <Input
                getRef={input => { this.entryInput = input; }}
                onChangeText={(text) => this.setState({entry: text})} value={this.state.entry} />
              </Item>
              <View style={{ paddingLeft: 130 }}>
              <Button style={{ backgroundColor: '#2b5451' }} onPress={this.handleSubmit}>
                <Text>Add Reflection</Text>
              </Button>
              </View>
            </Form>
            <Text />
            <Text />
            <View style={{ paddingLeft: 130 }}>
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
