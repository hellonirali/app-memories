import React from 'react';
import { AppRegistry, View } from 'react-native';
import AppContainer from './AppContainer';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import memories from './app/store/memories';

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// function configureStore(initialState){
//   const enhancer = compose(
//     applyMiddleware(thunkMiddleware, loggerMiddleware)
//   );
//   return createStore(memories, initialState, enhancer);
// }

// const store = configureStore({});

// const App = () => (
//   <View>
//     <AppContainer />
//   </View>
// );

AppRegistry.registerComponent('appMemories', () => AppContainer);
