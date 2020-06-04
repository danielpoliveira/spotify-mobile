import React                                      from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity }          from 'react-native';
import { NavigationContainer, DefaultTheme }      from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons                                   from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons                     from 'react-native-vector-icons/MaterialCommunityIcons';

import Home                                       from './home';
import Search                                     from './search';

const Tab = createBottomTabNavigator();

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
  <PlayerToggled navigation={props.navigation} />
  <BottomTabBar {...props} />
</>
  
export default ({ navigation }) =>  
<Tab.Navigator 
  tabBar={ props =><MyBottomTabBar {...props} navigation={navigation} /> } 
  screenOptions={screenOptions} 
  tabBarOptions={tabBarOptions} 
>
  <Tab.Screen name="Início"         component={Home} />
  <Tab.Screen name="Buscar"         component={Search} />
  <Tab.Screen name="Sua Biblioteca" component={YourLib} />
  <Tab.Screen name="Premium"        component={Premium} />
</Tab.Navigator>

const PlayerToggled = ({ navigation }) => 
<TouchableOpacity onPress={() => navigation.navigate('PlayerView')} >

  <View style={{width: "100%", backgroundColor: "#999"}}>
    <View style={{width: 120, backgroundColor: "#FFFFFF", height:2.5}} />
  </View>

  <View style={styles.playerToggled}>
    <Image style={styles.playerToggledAlbumMiniArt} 
      source={{uri: 'https://i.scdn.co/image/ab67616d00001e0226f7709399913201ebe40eee'}} 
    />
    <View style={{flexDirection: "row", justifyContent: "space-between", flex:1,}}>
      <View style={{ flexDirection: "row",  flex:1, paddingLeft: 10, alignItems:"center"}}>
        <Text style={{fontSize: 14, fontWeight: "bold" , color: "#FFFFFF"}} >Cthulhu Sleeps</Text>
        <Text style={{fontSize: 14, fontWeight: "bold" , color: "#ADADAD"}}> • deadmau5</Text>
      </View>
      <View style={{ width: '25%', flexDirection: "row", alignItems: "center",  paddingHorizontal:10}}>
        <MaterialCommunityIcons style={{marginRight: 5}} name="heart" size={25} color="#1CB954" />
        <MaterialCommunityIcons name="pause" size={30} color="#FFFFFF" />
      </View>
    </View>
  </View>

</TouchableOpacity>

const styles = StyleSheet.create({
  playerToggled: {
    height: 65, 
    flexDirection: "row",
    backgroundColor: "#282828", 
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  playerToggledAlbumMiniArt: {
    width: 65, height: '100%',
    //backgroundColor: "#acacac"
  }
})