import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Entry, Timeline, Modal } from './app/screens';
import { Router, Scene } from 'react-native-router-flux';


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{fontSize: 18}}>{title}</Text>
  );
};

const sceneConfig = {
  cardStyle: {
        backgroundColor: '#d4dfea'
  }
}

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" {...sceneConfig}>

          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#ffffff' }}
          >

            <Scene key="add" title="Add Reflection" icon={TabIcon}>
              <Scene
                key="modal"
                component={Modal}
                title="Title"
                hideNavBar
                hideTabBar
                initial="true"
              />

              <Scene
              key="entry"
              component={Entry}
              title="Add Reflection"
              hideTabBar
              />

              <Scene
              key="timeline"
              component={Timeline}
              title="Timeline"
              hideTabBar
            />
            </Scene>
          </Scene>


        </Scene>
      </Router>
    );
  }
}
