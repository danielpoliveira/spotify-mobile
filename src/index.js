import React                          from 'react';
import { View, StyleSheet, StatusBar} from "react-native";

import { Provider }                   from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routes                         from './pages/routes';

import reducers from './main/reducers';

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers);

export default () => 
<Provider store={store}>
  <View style={styles.appContainer}>
    <StatusBar backgroundColor="#121212" />
    <Routes /> 
  </View>
</Provider>

const styles  = StyleSheet.create({
  appContainer: { 
    flex: 1,
  },
})