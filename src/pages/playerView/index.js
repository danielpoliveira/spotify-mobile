import React, { useState }                                   from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import Ionicons                                from 'react-native-vector-icons/Ionicons';
import MaterialIcons                           from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons                  from 'react-native-vector-icons/MaterialCommunityIcons';
//import Animated                                from 'react-native-reanimated';
import { PanGestureHandler }                   from 'react-native-gesture-handler';

export default ({ navigation }) => {

  const Width     = new Animated.Value(50);
  const absoluteX = new Animated.Value(0);

  const handleGesture = Animated.event([{
    nativeEvent: {
      absoluteX: absoluteX,
    },

  }], { useNativeDriver: true,  listener:  
    
    e => absoluteX.setValue(e.nativeEvent.absoluteX)
    //e => console.log(e.nativeEvent.absoluteX)
  });



const styles = StyleSheet.create({
  viewTimeMusic: {
    width: 50,
  }
})

return (<View style={{flex:1, backgroundColor: "#3C4A64", paddingHorizontal: 20}} >
  
  <View 
    style={{flexDirection: "row", justifyContent: "space-between",
    paddingVertical: 15,
    alignItems: "center"}}
  >
    <TouchableOpacity onPress={() => navigation.goBack() } >
      <Ionicons name="ios-arrow-down" size={30} color={"#FFFFFF"} />
    </TouchableOpacity>

    <View style={{flexDirection: "column", alignItems: "center"}}>
      <Text style={{fontSize: 10, fontWeight: '100', color: "#FFFFFF"}} >TOCANDO DA PLAYLIST</Text>
      <Text style={{fontSize: 12, color: "#FFFFFF", fontWeight: "bold"}} >Daily Mix 1</Text>
    </View>

    <TouchableOpacity>
      <MaterialIcons name="more-vert"      size={30} color={"#FFFFFF"} />
    </TouchableOpacity>
  </View>

  <View style={{ justifyContent: "center", alignItems: "center"}} >
    
    <View style={{  
      shadowColor: "#000",    
      shadowOffset: { height:20},
      shadowOpacity: 1,
      elevation: 25
    }}>

    <Image style={{width: 360, height: 360,}} 
           source={{uri: "https://i.scdn.co/image/ab67616d00001e0226f7709399913201ebe40eee"}} />
    </View>
  </View>

  <View style={{paddingHorizontal: 10, paddingVertical: 12.5}}>
    <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "bold"}} >Cthulhu Sleeps</Text>
    <Text style={{fontSize: 17, color: "#CFCFCF"}} >deadmau5</Text>
  </View>

  <View style={{flexDirection: "column", paddingHorizontal: 10, }}>
    <PanGestureHandler onGestureEvent={handleGesture} >
    <Animated.View onTouchEnd={ e => absoluteX.setValue(e.nativeEvent.locationX) }>

      <View style={{width:'100%', height: 3.5,backgroundColor: "#FFFFFF", marginVertical: 10, overflow: 'hidden'}} >
        <Animated.View 
          style={{
            flex:1, backgroundColor: "#333333ff", 
            justifyContent: "center",
            transform: [{ translateX: absoluteX }] 
          }} 
        />

      </View>
      
    </Animated.View>
      </PanGestureHandler>
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 7.5}} >
      <Text style={{color: "#FFFFFF", fontSize: 12}}>0:05</Text>
      <Text style={{color: "#FFFFFF", fontSize: 12}}>4:02</Text>
    </View>
  </View>

  <View style={{flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", alignItems: "center"}}>
      <TouchableOpacity>
        <MaterialIcons style={{}} name="favorite" size={30} color="#1CB954" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons style={{}} name="skip-previous" size={45} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons style={{}} name="pause-circle-filled" size={75} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons style={{}} name="skip-next" size={45} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons style={{}} name="remove-circle-outline" size={30} color="#FFFFFF" />
      </TouchableOpacity>
  </View>

  <View style={{flexDirection: "row", justifyContent: "space-between",paddingHorizontal: 10 ,alignItems: "center", paddingVertical: 10}}>
      <TouchableOpacity>
        <MaterialCommunityIcons style={{}} name="speaker-multiple" size={23} color="#ddd" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons          style={{}} name="share"            size={23} color="#ddd" />
      </TouchableOpacity>
  </View>

</View>
)}