import React                             from 'react';
import { View, Text}                     from 'react-native';
import { TouchableOpacity }              from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons            from 'react-native-vector-icons/MaterialCommunityIcons';

import MyTabBar                          from '../../../components/myTopTabBar';

const Tab = createMaterialTopTabNavigator();

const Explore = () =>
<TouchableOpacity 
  style={{
    backgroundColor: "#FFFFFF", borderRadius: 20, 
    paddingVertical:12, paddingHorizontal: 35, alignItems: "center", justifyContent: "center" }}>
  <Text style={{fontSize: 15, letterSpacing:1,fontWeight: "700", }}>EXPLORAR PODCASTS</Text>
</TouchableOpacity>


const Episodes = () => 
<View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
  <Text style={{color: "#FFFFFF",marginVertical: 50, fontWeight: "bold", fontSize: 22}}>Procurando algo para ouvir?</Text>
  <Explore />
</View>

const Downloads = () => {
  const downIcon = <MaterialCommunityIcons name="arrow-down-circle-outline" style={{alignSelf: "center"}} size={17} color="#ccc" />  

  return ( 
    <View style={{flex:1, alignItems: "center", justifyContent: "center",}}>

      <View style={{marginVertical: 50, alignItems: "center"}}>
        <Text style={{  color: "#FFFFFF", fontWeight: "bold", fontSize: 22 }}>Nenhum download por enquanto</Text>
        <Text style={{ fontSize: 12,color: "#ccc"}}>Toque em {downIcon} em um episódio para ouvi-lo sem conexão.</Text>
      </View>

      <Explore />
    </View>
  );
}

const Programs = () => 
<View style={{flex:1, alignItems: "center", justifyContent: "center",}}>
  <View style={{marginVertical: 50, alignItems: "center"}}>
    <Text style={{ maxWidth: '65%', textAlign: "center",color: "#FFFFFF", fontWeight: "bold", fontSize: 22, lineHeight: 35, }}>Você ainda não seguiu nenhum podcast.</Text>
    <Text style={{lineHeight: 35, textAlign: "center", maxWidth: '70%',fontSize: 12,color: "#ccc"}}>Quando você segue um podcast, os novos episódios aparecem automaticamente na sua coleção.</Text>
  </View>

  <Explore />
</View>

export default () => (
  <Tab.Navigator tabBar={MyTabBar} >
    <Tab.Screen name="Episódios" component={Episodes}  />
    <Tab.Screen name="Downloads" component={Downloads} />
    <Tab.Screen name="Programas" component={Programs}  />
  </Tab.Navigator>
);