import React                        from 'react';
import { 
  View,  Text, 
  StyleSheet, StatusBar,
}                                   from "react-native";

import BottomTabs from './Tabs';

export default () => (
<>
  <View style={styles.appContainer}>
    <StatusBar backgroundColor="#121212"  animated={true} showHideTransition="fade"  translucent={true} />
    <BottomTabs />
  </View>
</>
)

const styles  = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#121212",
  }
})