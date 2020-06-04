import React               from 'react';
import { View, StyleSheet} from "react-native";

import Routes              from './pages/routes';

export default () => 
<View style={styles.appContainer}>
  <Routes />
</View>

const styles  = StyleSheet.create({
  appContainer: { 
    flex: 1,
    //paddingTop: 20,
  },
})