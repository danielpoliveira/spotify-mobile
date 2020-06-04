import React                                 from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator }              from '@react-navigation/stack';

import Tabs                                  from './tabs';
import PlayerView                            from './playerView';

const Stack = createStackNavigator();

const Routes = () => 
<NavigationContainer theme={theme} >
  <Stack.Navigator>
    <Stack.Screen name="Tabs"       component={Tabs}        options={{ headerShown: false, headerTransparent: true }} />
    <Stack.Screen name="PlayerView" component={PlayerView}  options={{ headerShown: false, headerTransparent: true }} />
  </Stack.Navigator>
</NavigationContainer>

const theme = {
  dark: true,
   ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212',
  },
};

export default Routes;