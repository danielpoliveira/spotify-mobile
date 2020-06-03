import React                          from 'react';
import { View, StyleSheet, StatusBar} from "react-native";

import BottomTabs                     from './pages';

export default () => 
<View style={styles.appContainer}>
  <StatusBar backgroundColor="#121212"  animated={true} showHideTransition="fade"  translucent={true} />
  <BottomTabs />
</View>

const styles  = StyleSheet.create({
  appContainer: { 
    flex: 1,
    paddingTop: 20,
  },
})