import React                from 'react';
import Animated             from 'react-native-reanimated';
import { View }             from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyTabBar = ({ state, descriptors, navigation, position }) => (
  <View style={{ flexDirection: 'row', marginTop: 28 }}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title   !== undefined
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
          style={[
            isFocused? { borderColor: "#1CB954", borderBottomWidth: 2}:undefined,
            { marginRight: 20, paddingBottom: 6, marginBottom: 8 }]}
        >
          <Animated.Text style={{ opacity, color: "#FFFFFF", fontSize: 17 }}>
            {label}
          </Animated.Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default MyTabBar;