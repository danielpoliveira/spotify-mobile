import React                            from 'react';
import { createBottomTabNavigator }     from '@react-navigation/bottom-tabs';

import MyBottomTabBar                   from '../components/myBottomTabBar';
import { screenOptions, tabBarOptions } from '../components/myBottomTabBar/MyBottomTabBarOptions';

import Home                             from './home';
import Search                           from './search';
import YourLibrary                      from './yourLibrary';
import BePremium                        from './bePremium';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator 
    tabBar={props => <MyBottomTabBar {...props} />} 
    screenOptions={screenOptions} 
    tabBarOptions={tabBarOptions} 
    children={props => ({ ...props })} 
  >
    <Tab.Screen name="Início"         component={Home}        />
    <Tab.Screen name="Buscar"         component={Search}      />
    <Tab.Screen name="Sua Biblioteca" component={YourLibrary} />
    <Tab.Screen name="Premium"        component={BePremium}   />
  </Tab.Navigator>
);

export default Tabs;