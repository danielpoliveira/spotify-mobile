import React                                      from 'react';
import { StyleSheet, TouchableOpacity  }                            from 'react-native';
import { NavigationContainer, DefaultTheme }      from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar }               from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator }               from '@react-navigation/material-bottom-tabs';
import Ionicons                                   from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons                     from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './pages/home';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

const setIcon = (iconName = '', color, size) => {
  
  let iconSelect = 0;

  switch(iconName){
    case 'Início':           iconName = 'ios-home';                     break;       
    case 'Buscar':           iconName = 'ios-search';                   break;
    case 'Sua Biblioteca':   iconName = 'library-music'; iconSelect=1;  break;
    case 'Premium':          iconName = 'spotify'  ;     iconSelect=1;  break;
    default:                 iconName = 'ios-close';                    break;
  }

  const props = {
    name: iconName, 
    size, 
    color
  };

  return iconSelect? <MaterialCommunityIcons {...props}  /> 
                   : <Ionicons               {...props}  />
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {  

    const Icon = setIcon(route.name, color, size);

    return Icon;
  }
})

const tabBarOptions = {
  activeTintColor: "#FFFFFF",
  inactiveTintColor: "#B3B3B3",
  style: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 0,
    borderTopColor: "red",
    backgroundColor: '#282828', 
  }
}

const theme = {
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212',
  },
  
}

const Search = () => 
<View>
  <Text>Search Screen :)</Text>
</View>

const YourLib = () => 
<View>
  <Text>Your Library :D</Text>
</View>

const Premium = () => 
<View>
  <Text>Be Premium 8)</Text>
</View>

const MyBottomTabBar = props =>
<>
  <PlayerToggled />
  <BottomTabBar {...props} />
</>
  

export default () =>
<NavigationContainer theme={theme} >
  <Tab.Navigator tabBar={props =><MyBottomTabBar {...props} />} screenOptions={screenOptions} tabBarOptions={tabBarOptions}  >
    <Tab.Screen name="Início"         component={Home} />
    <Tab.Screen name="Buscar"         component={Search} />
    <Tab.Screen name="Sua Biblioteca" component={YourLib} />
    <Tab.Screen name="Premium"        component={Premium} />
  </Tab.Navigator>
</NavigationContainer>


const PlayerToggled = () => 
<View style={styles.playerToggled}>
  <View  style={styles.playerToggledAlbumMiniArt} />
  <View style={{flexDirection: "row", justifyContent: "space-between", flex:1,}}>
    <View style={{ flexDirection: "row",  flex:1, paddingLeft: 10, alignItems:"center"}}>
      <Text style={{fontSize: 14, fontWeight: "bold" , color: "#FFFFFF"}} >Inner Space - Original Mix</Text>
      <Text style={{fontSize: 14, fontWeight: "bold" , color: "#ADADAD"}}>. Apex</Text>
    </View>
    <View style={{ width: '25%', flexDirection: "row", alignItems: "center",  paddingHorizontal:10}}>
      <MaterialCommunityIcons style={{marginRight: 5}} name="heart" size={30} color="#FFFFFF" />
      <MaterialCommunityIcons name="pause" size={30} color="#FFFFFF" />
    </View>
  </View>
</View>

const styles = StyleSheet.create({
  playerToggled: {
    height: 65, 
    flexDirection: "row",
    backgroundColor: "#282828", 
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  playerToggledAlbumMiniArt: {
    width: 65, height: '100%',
    backgroundColor: "yellow"
  }
})