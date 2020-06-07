import React, { useState, useEffect }    from 'react';
import { View, Text, Image, YellowBox }  from 'react-native';
import { FlatList, }                     from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons                          from 'react-native-vector-icons/Ionicons';

import MyTabBar                          from '../../../components/myTopTabBar'
import api                               from '../../../services/api';

YellowBox.ignoreWarnings([ 'Each child in a list should have a unique "key" prop.'  ])

const Tab = createMaterialTopTabNavigator();

const SubtitleIcon = ({ type }) =>
type==="playlist"?
<>
  <View style={{width: 17,height: 12, borderRadius:2, marginRight: 5,backgroundColor: "#CCC", alignItems: "center", justifyContent: "center"}}>
      <Ionicons name="ios-shuffle" size={15} color="#222"/>
  </View>

  <Text style={{color: "#FFFFFF", fontSize: 12}} >de </Text>
</>
: null


const ListComponent = props => {
  const { type } = props;
  
  const image_uri = 
  type === 'playlist' || type === 'artist'?  props.item.images[0].url:
  type === 'album'?                          props.item.album.images[0].url:
  null

  const title = 
  type === 'playlist' || type === 'artist' ? props.item.name:
  type === 'album'?                          props.item.album.name:
  null;
  
  const subtitle = 
  type === 'playlist'?                       props.item.owner.display_name: 
  type === 'album?'  ?                       props.item.album.artists[0].name: 
  null;

  return (
    <View style={{ flexDirection: "row", width: "100%", marginBottom: 16,}} >
      <Image source={{uri: image_uri}} style={[ props.isArtist? { borderRadius: 100 } : null, { width: 64,height: 64, backgroundColor: "gray" }]} />
      
      <View style={{flex:1,flexDirection: "column", justifyContent: "center", paddingLeft: 10 }} >
        <Text style={{color: "#FFFFFF", fontSize: 16,fontWeight: "bold"}} >{title}</Text>

        { 
          type !== 'artist' &&

          <View style={{flexDirection: "row", alignItems: "center"}} >
            <SubtitleIcon type={type} />        
            <Text style={{color: "#FFFFFF", fontSize: 14}} >{subtitle}</Text> 
          </View>
        }

      </View>
    </View>
  );
}

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const loadPlaylists = async () => {
      const res = await api.get("/me/playlists");

      const { items } = res.data;

      if(items.length)
        setPlaylists(items);
    }

    loadPlaylists();
  }, []);

  return (
    <View>
      <FlatList disableScrollViewPanResponder data={playlists} keyExtractor={item => item.id} renderItem={item => < ListComponent {...item} type="playlist" />} />
    </View>
  );

}

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const loadAlbums = async () => {
      const res = await api.get("/me/albums");

      const { items } = res.data;

      if(items.length)
        setAlbums(items);
    }

    loadAlbums();
  }, []);

  return (
    <View>
      <FlatList data={albums} keyExtractor={item => item.id} renderItem={item => <ListComponent {...item} type="album" />} />
    </View>
  );
}

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const loadArtists = async () => {
      const res = await api.get("/me/following", {params: {type: "artist"} } )

      const { artists } = res.data;

      if(artists.items  && artists.items.length)
        setArtists(artists.items);
    }

    loadArtists();
  }, []);

  return (
    <View>
      <FlatList data={artists} keyExtractor={item => item.id} renderItem={item => <ListComponent {...item} isArtist  type="artist"/>}/>
    </View>
  );
}

export default () => (
  <Tab.Navigator tabBar={MyTabBar} >
    <Tab.Screen  name="Playlists" component={Playlists} />
    <Tab.Screen  name="Artists"   component={Artists}   />
    <Tab.Screen  name="Albums"    component={Albums}    />
  </Tab.Navigator>
);
