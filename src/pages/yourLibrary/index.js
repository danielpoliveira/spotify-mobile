import React                             from 'react';
import Animated                          from 'react-native-reanimated';
import { View }                          from 'react-native';
import { TouchableOpacity }              from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Music                             from './music';
import Podcast                           from './podcast';

const Tab = createMaterialTopTabNavigator();

const MyTabBar = ({ state, descriptors, navigation, position, labelStyle }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 28 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange:  inputRange.map(i => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ marginRight: 20 }}
          >
            <Animated.Text style={{ opacity, fontSize: 30 ,color: "#FFF", fontWeight: "bold"}}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default () => (
  <Tab.Navigator tabBar={props => <MyTabBar {...props} />} >
    <Tab.Screen name="Músicas"  component={Music} />
    <Tab.Screen name="Podcasts" component={Podcast} />
  </Tab.Navigator>
);