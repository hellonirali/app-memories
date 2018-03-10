import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import axios from 'axios';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Memory = t.struct({
  date: t.Date,
  title: t.String,
  mood: t.String,
  entry: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    title: {
      error: 'Title required',
      placeholder: 'Subject'
    },
    mood: {
      error: 'Mood required',
      placeholder: 'How are you feeling?'
    },
    entry: {
      error: 'Entry required',
      placeholder: 'Describe your memory'
    },
  },
  stylesheet: formStyles,
};

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/api/memories', {
      date: this._form.getValue().date,
      entry: this._form.getValue().entry,
      mood: this._form.getValue().mood,
      title: this._form.getValue().title
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Add an Entry</Text>
        <Form
          ref={c => this._form = c}
          type={Memory}
          options={options}
        />
        <Button
          title="Add Memory"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
