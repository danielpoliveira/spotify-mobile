import React, { useState, useEffect }    from 'react';
import { View, Text, Image, YellowBox }  from 'react-native';
import { FlatList, }                     from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons                          from 'react-native-vector-icons/Ionicons';

import MyTabBar                          from '../../../components/myTopTabBar'
import api                               from '../../../services/api';

YellowBox.ignoreWarnings([ 'Each child in a list should have a unique "key" prop.'  ])

const Tab = createMaterialTopTabNavigator();

const ListComponent = props => {
  const { type ,navigation} = props;

  let image_uri = undefined;
  let title     = undefined;
  let subtitle  = undefined;

  switch(type){
    case 'playlist': 
      image_uri = props.item.images[0].url;
      title     = props.item.name;
      subtitle  = props.item.owner.display_name;
      break;
      
    case 'album'   :
      image_uri = props.item.album.images[0].url;
      title     = props.item.album.name;
      subtitle  = props.item.album.artists[0].name;
    break;

    case 'artist'  :
      image_uri = props.item.images[0].url;
      title     = props.item.name;
      subtitle  = null;
    break;

    default:
      image_uri = title = subtitle = null;
  }

  return (
    <View onTouchEnd={() => navigation.navigate('Playlist')}
      style={{ flexDirection: "row", width: "100%", marginBottom: 16,}} 
    >
      <Image source={{uri: image_uri}} style={[ props.isArtist? { borderRadius: 100 } : null, { width: 64,height: 64, backgroundColor: "gray" }]} />
      
      <View style={{flex:1,flexDirection: "column", justifyContent: "center", paddingLeft: 10 }} >
        <Text style={{color: "#FFFFFF", fontSize: 16,fontWeight: "bold"}} >{title}</Text>

        { type !== 'artist' &&

          <View style={{flexDirection: "row", alignItems: "center"}} >
            <View style={{width: 17,height: 12, borderRadius:2, marginRight: 5,backgroundColor: "#CCC", alignItems: "center", justifyContent: "center"}}>
              <Ionicons name="ios-shuffle" size={15} color="#222"/>
            </View>

            { type === 'playlist' &&
              <Text style={{color: "#FFFFFF", fontSize: 12}} >de </Text>
            }

            <Text style={{color: "#FFFFFF", fontSize: 14}} >{subtitle}</Text> 
          </View>
        }

      </View>
    </View>
  );
}

const Playlists = ({ navigation }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const loadPlaylists = async () => {
      const res = await api.get("/me/playlists");

      const { items } = res.data;

      items.length && setPlaylists(items);
    }

    loadPlaylists();
  }, []);

  return (
    <View>
      <FlatList disableScrollViewPanResponder data={playlists} keyExtractor={item => item.id} renderItem={item => < ListComponent {...item} navigation={navigation} type="playlist" />} />
    </View>
  );
}

const Albums = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const loadAlbums = async () => {
      const res = await api.get("/me/albums");

      const { items } = res.data;

      items.length && setAlbums(items);
    }

    loadAlbums();
  }, []);

  return (
    <View>
      <FlatList data={albums} keyExtractor={item => item.id} renderItem={item => <ListComponent {...item} type="album" />} navigation={navigation}  />
    </View>
  );
}

const Artists = ({ navigation }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const loadArtists = async () => {
      const res = await api.get("/me/following", { params: { type: "artist" }});

      const { artists } = res.data;

      if(artists.items  && artists.items.length)
        setArtists(artists.items);
    }

    loadArtists();
  }, []);

  return (
    <View>
      <FlatList data={artists} keyExtractor={item => item.id} renderItem={item => <ListComponent {...item} isArtist  type="artist"/>} navigation={navigation} />
    </View>
  );
}

export default () => (
  <Tab.Navigator 
    tabBar={MyTabBar} 
    children={props => ({...props})}
  >
    <Tab.Screen  name="Playlists" component={Playlists} />
    <Tab.Screen  name="Artists"   component={Artists}   />
    <Tab.Screen  name="Albums"    component={Albums}    />
  </Tab.Navigator>
);
