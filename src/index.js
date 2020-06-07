import React                          from 'react';
import { View, StyleSheet, StatusBar} from "react-native";

import { Provider }                   from 'react-redux';
import { createStore } from 'redux';

import Routes                         from './pages/routes';

import reducers from './main/reducers';

const store = createStore(reducers);

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