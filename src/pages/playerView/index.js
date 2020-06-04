import React          from 'react';
import { View, Text, Image } from 'react-native';

import Ionicons      from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => (
  <View style={{flex:1, backgroundColor: "#3C4A64", paddingHorizontal: 20}} >
    
    <View 
      style={{flexDirection: "row", justifyContent: "space-between",
      paddingVertical: 12.5,
      alignItems: "center"}}
    >
      <Ionicons name="ios-arrow-down" size={30} color={"#FFFFFF"} />

      <View style={{flexDirection: "column", alignItems: "center"}}>
        <Text style={{fontSize: 10, fontWeight: '100', color: "#FFFFFF"}} >TOCANDO DA PLAYLIST</Text>
        <Text style={{fontSize: 12, color: "#FFFFFF", fontWeight: "bold"}} >Daily Mix 1</Text>
      </View>

      <MaterialIcons name="more-vert"      size={30} color={"#FFFFFF"} />
    </View>

    <View style={{ justifyContent: "center", alignItems: "center"}} >
      <Image style={{width: 360, height: 360}}  source={{uri: "https://i.scdn.co/image/ab67616d00001e0226f7709399913201ebe40eee"}} />
    </View>

    <View style={{paddingHorizontal: 10, paddingVertical: 12.5}}>
      <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "bold"}} >Cthulhu Sleeps</Text>
      <Text style={{fontSize: 17, color: "#CFCFCF"}} >deadmau5</Text>
    </View>

    <View style={{flexDirection: "column", paddingHorizontal: 10, paddingTop: 10}}>
      <View style={{width:'100%', height: 3, backgroundColor: "#3F3F3F"}}>
        <View style={{flex:1, backgroundColor: "#FFFFFF", width: 50, justifyContent: "center"}}>
          <View style={{backgroundColor: "#FFFFFF", width: 8, height: 8, borderRadius: 100, left: 48}} />
        </View>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 3}} >
        <Text style={{color: "#FFFFFF", fontSize: 12}}>0:05</Text>
        <Text style={{color: "#FFFFFF", fontSize: 12}}>4:02</Text>
      </View>
    </View>

    <View style={{flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", alignItems: "center"}}>
        <MaterialIcons style={{}} name="favorite" size={30} color="#1CB954" />
        <MaterialIcons style={{}} name="skip-previous" size={45} color="#FFFFFF" />
        <MaterialIcons style={{}} name="pause-circle-filled" size={80} color="#FFFFFF" />
        <MaterialIcons style={{}} name="skip-next" size={45} color="#FFFFFF" />
        <MaterialIcons style={{}} name="remove-circle-outline" size={30} color="#FFFFFF" />
    </View>

    <View style={{flexDirection: "row", justifyContent: "space-between",paddingHorizontal: 10 ,alignItems: "center", paddingVertical: 10}}>
        <MaterialCommunityIcons style={{}} name="speaker-multiple" size={23} color="#ddd" />
        <MaterialIcons          style={{}} name="share"            size={23} color="#ddd" />
    </View>

  </View>
);