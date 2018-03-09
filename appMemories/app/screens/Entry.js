import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
// import { connect } from 'react-redux';
import { addMemory } from '../store/memories';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
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
      placeholder: 'Rate (Sad) 1-10 (Happy)'
    },
    entry: {
      error: 'Entry required',
      placeholder: 'Describe your memory'
    },
  },
  stylesheet: formStyles,
};

export default class Entry extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Add an Entry</Text>
        <Form
          ref={c => this._form = c}
          type={User}
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

// const mapState = null;
// const mapDispatch = (dispatch, ownProps) => {
//   return {
//     submitChange(event) {
//       dispatch(
//         addMemory({
//           date: this._form.getValue().date,
//           entry: this._form.getValue().entry,
//           mood: this._form.getValue().mood,
//           title: this._form.getValue().title
//         })
//       )
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Entry)
