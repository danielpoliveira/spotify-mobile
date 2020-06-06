import React          from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import { FlatList } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();


const PLAYLIST_DATA = [
  {id: "00", title: 'Criar Playlist',                               from: ''},
  {id: "01", title: 'Músicas Curtidas',                             from: '89 songs'},
  {id: "02", title: 'Lofi hip hop music - beats to relax/study to', from: 'chilledcow'},
  {id: "03", title: 'Ski Mask The Slump God Rádio'                , from: 'spotify'},
  {id: "04", title: 'Lofizinho engcomp',                            from: 'Juliscreudo'},
  {id: "05", title: '',                                             from: 'famspotify123'},
  {id: "06", title: '',                                             from: 'Wolfy'},
  {id: "07", title: '',                                             from: 'Diavlonegro'},
  {id: "08", title: 'Curtidas na Rádio',                            from: 'Juliscreudo'},
  {id: "09", title: 'DATA WING Soundtrack',                         from: 'Dan Vogt'},
  {id: "10", title: 'My songs offline',                             from: 'Juliscreudo'},
  {id: "11", title: 'NFS Carbon SoundTrack',                        from: 'Ricards Kaupuzs'},
  {id: "12", title: 'Ouvir com calma depois',                       from: 'Juliscreudo'},
];

const ARTIST_DATA = [
  {id: '00', name: 'Amon Tobin'},
  {id: '01', name: 'Aphex Twin'},
  {id: '02', name: 'Earl Sweatshirt'},
  {id: '03', name: 'Frank Ocean'},
  {id: '04', name: 'jhfly'},
  {id: '05', name: 'Knxwledge'},
  {id: '06', name: 'Lil Yachty'},
  {id: '07', name: 'Night Lovell'},
  {id: '08', name: 'Playboi Carti'},
  {id: '09', name: 'Tyler, The Creator'},
  {id: '10', name: 'Adicionar artistas'},
];

const ALBUM_DATA = [
  {id: "00", album: "It's True", artist: "Axwell"},
  {id: "01", album: "FEET OF CLAY", artist: "Earl Sweatshirt"},
  {id: "02", album: "Blonde", artist: "Frank Ocean"},
  {id: "03", album: "In My Room", artist: "Frank Ocean"},
  {id: "04", album: "STOKELEY", artist: "Ski Mask The Slump God"},
  
];

const Playlist = props => {

  return <View style={{ flexDirection: "row", width: "100%", margin: 10}} >
    <View style={{width: 80,height: 80, backgroundColor: "gray"}} />
    <View style={{flex:1,flexDirection: "column", backgroundColor: "red", 
      justifyContent: "center",
      paddingLeft: 10
    }} >
        <Text style={{color: "#FFFFFF", fontSize: 16,fontWeight: "bold"}} >{props.item.title}</Text>
        <Text style={{color: "#FFFFFF", fontSize: 14}} >{props.item.from}</Text>
    </View>

</View>
}

const Playlists = () => 
<View style={{}} >

  <FlatList 
  
  data={PLAYLIST_DATA}
  keyExtractor={item => item.id}
  renderItem={item => Playlist(item)}


  />

</View>

const Artist = (props) =>(
  <View style={{ flexDirection: "row", width: "100%", margin: 10}} >
  <View style={{width: 80,height: 80, backgroundColor: "gray"}} />
  <View style={{flex:1,flexDirection: "column", backgroundColor: "red", 
    justifyContent: "center",
    paddingLeft: 10
  }} >
      <Text style={{color: "#FFFFFF", fontSize: 16,fontWeight: "bold"}} >{props.item.name}</Text>
      
  </View>

</View> 
)

const Artists = () => 
<View>
  <FlatList  
    data={ARTIST_DATA} 
    keyExtractor={item => item.id}
    renderItem={item => Artist(item)}
  />
</View>


const Album = props => {

  return <View style={{ flexDirection: "row", width: "100%", margin: 10}} >
    <View style={{width: 80,height: 80, backgroundColor: "gray"}} />
    <View style={{flex:1,flexDirection: "column", backgroundColor: "red", 
      justifyContent: "center",
      paddingLeft: 10
    }} >
        <Text style={{color: "#FFFFFF", fontSize: 16,fontWeight: "bold"}} >{props.item.album}</Text>
        <Text style={{color: "#FFFFFF", fontSize: 14}} >{props.item.artist}</Text>
    </View>

</View>
}


const Albums = () => 
<View>
  <FlatList  
    data={ALBUM_DATA} 
    keyExtractor={item => item.id}
    renderItem={item => Album(item)}
  />
</View>


const MyTabBar = ({ state }) => {
 return <View style={{flexDirection: "column", alignItems: "flex-start"}}>
    <Text style={{
      borderBottomWidth: 2, borderBottomEndRadius: 100, borderBottomColor: "#31ac5e", 
      color: "#FFFFFF", fontSize: 17, paddingVertical: 5
    }} >
      {state.routeNames[state.index]}</Text>
</View>


}
export default () => (
  <Tab.Navigator  tabBar={MyTabBar} >
    <Tab.Screen  name="Playlists" component={Playlists} />
    <Tab.Screen  name="Artists" component={Artists} />
    <Tab.Screen  name="Albums" component={Albums} />
  </Tab.Navigator>
);

