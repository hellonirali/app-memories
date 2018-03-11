import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Entry, Timeline } from './app/screens';
import { Router, Scene } from 'react-native-router-flux';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#ffffff' }}
          >

            <Scene key="timelineTab" title="Timeline" icon={TabIcon}>
              <Scene
                key="timeline"
                component={Timeline}
                title="Timeline"
              />
            </Scene>

            <Scene key="add" title="Add Memory" icon={TabIcon}>
              <Scene
              key="entry"
              component={Entry}
              title="Add Memory"
              />
            </Scene>


          </Scene>
        </Scene>
      </Router>
    );
  }
}
