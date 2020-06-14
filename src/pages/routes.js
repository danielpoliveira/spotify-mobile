import React                                 from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator }              from '@react-navigation/stack';

import Tabs                                  from './tabs';
import PlayerView                            from './playerView';
import Login                                 from './login';
import Playlist                              from './playlist';
import SearchResult                          from './search/searchResult';

const Stack = createStackNavigator();

const Routes = () => 
<NavigationContainer theme={theme} >
  <Stack.Navigator>
    <Stack.Screen name="Login"        component={Login}         options={{ headerShown: false }} />
    <Stack.Screen name="Tabs"         component={Tabs}          options={{ headerShown: false }} />
    <Stack.Screen name="PlayerView"   component={PlayerView}    options={{ headerShown: false }} />
    <Stack.Screen name="Playlist"     component={Playlist}      options={{ headerShown: false }} />
    <Stack.Screen name="SearchResult" component={SearchResult}  options={{ headerShown: false }} />
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