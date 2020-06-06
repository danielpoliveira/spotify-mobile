import React               from 'react';
import { View, StyleSheet, StatusBar} from "react-native";

import Routes              from './pages/routes';

export default () => 
<View style={styles.appContainer}>
  <StatusBar backgroundColor="#121212" />
  <Routes />
</View>

const styles  = StyleSheet.create({
  appContainer: { 
    flex: 1,
  },
})