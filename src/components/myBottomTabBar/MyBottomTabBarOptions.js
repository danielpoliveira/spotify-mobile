import React                  from 'react';
import Ionicons               from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const setIcon = (name = '', color, size) => {
  let iconSelect = 0;

  switch(name){
    case 'Início':           name = 'home';          iconSelect=1;  break;       
    case 'Buscar':           name = 'ios-search';                   break;
    case 'Sua Biblioteca':   name = 'library-music'; iconSelect=1;  break;
    case 'Premium':          name = 'spotify'  ;     iconSelect=1;  break;
    default:                 name = 'ios-close';                    break;
  }

  const props = { name, size, color };

  return iconSelect? <MaterialCommunityIcons {...props}  /> : <Ionicons {...props}  />
}

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {  
    const Icon = setIcon(route.name, color, size);

    return Icon;
  }
})

export const tabBarOptions = {
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