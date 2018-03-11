import React, { Component } from 'react';
import { Entry, Timeline, TitlePage } from './app/screens';
import { Router, Scene } from 'react-native-router-flux';
import Navbar from './app/components';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">

              <Scene
                key="titlePage"
                component={TitlePage}
                hideNavBar
                initial
              />

              <Scene
              key="entry"
              component={Entry}
              title="Write New Reflection"
              navbar={Navbar}
              />

              <Scene
              key="timeline"
              component={Timeline}
              title="Timeline"
            />

            </Scene>
      </Router>
    );
  }
}
