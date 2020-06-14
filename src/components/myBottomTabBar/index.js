import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, YellowBox }   from 'react-native';
import { bindActionCreators }                                   from 'redux';
import { connect }                                              from 'react-redux';

import { PanGestureHandler, State, TouchableOpacity }           from 'react-native-gesture-handler';
import { changeMusic, playPauseMusic }                          from '../../pages/actions';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons                                   from 'react-native-vector-icons/MaterialCommunityIcons';

YellowBox.ignoreWarnings([ '`useNativeDriver` was not specified.' ]);

const MUSIC_PLAYER_DATA = [
  {id:"00", music: "Cthulhu Sleeps", artist: "deadmau5", album: "4x4=12", album_art: "https://i.scdn.co/image/ab67616d00001e0226f7709399913201ebe40eee"},
  {id:"01", music: "20 Questions",   artist: "Ivy Lab", album: "Twenty Questions EP", album_art: "https://i.scdn.co/image/ab67616d0000b2731ac6a7c14adcc03996218af6"},
  {id:"02", music: "If I Could",     artist: "Mefjus", album: "Manifest", album_art: "https://i.scdn.co/image/ab67616d0000b27380a0a8e1c466134833a1cb89"},
];

const PlayerToggled = (props) => {
  const { 
    index, 
    navigation, 
    track 
  } = props;

  const [favoriteIcon, setFavoriteIcon] = useState({ name: "heart-outline", color: "#FFFFFF" });

  const onFavoritePressed = () => {
    setFavoriteIcon(favoriteIcon.name === "heart"? { name:"heart-outline", color: "#FFFFFF" } : { name: "heart", color: "#1CB954"});
  }

  let opened = false;
  let position = 0;
  let offset = 0;
  
  const MusicTranslateX = new Animated.Value(0);

  const HandleMusicGesture = Animated.event([{
    nativeEvent: { translationX: MusicTranslateX },
  }], {
    useNativedriver: true,
  });
  
  const handleAlbumArtStateChand = event => { 
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      offset                += translationX;
  
      if(translationX >= 80) {
       opened = true;
       position = opened? -1 : 0;
      } 
      
      else if(translationX <= -80){
        opened = true;
        position = opened? 1: 0;
      }

      else {
        MusicTranslateX.setValue(offset);
        MusicTranslateX.setOffset(0);
        offset = 0;
      }
       
      Animated.timing(MusicTranslateX, {
        toValue: opened? -position * 300 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened? -position * 300 : 0;
        MusicTranslateX.setOffset(offset);
        MusicTranslateX.setValue(0);

        opened && props.changeMusic(index+position);
      });
    }
  }

  return (
    <View>
      <View style={{width: "100%", backgroundColor: "#999"}}>
        <View style={{width: 120, backgroundColor: "#FFFFFF", height:2.5}} />
      </View>

      <View style={styles.playerToggled}>
        <View onTouchEnd={
          () => navigation.navigate('PlayerView', {
            MUSIC_PLAYER_DATA,
            playlist_name: 'Daily Mix 1'
          })
        }

        style={{flex:1, flexDirection: "row"}} >
        <Image style={styles.playerToggledAlbumMiniArt} 
          source={{uri: `https://i.scdn.co/image/${track.image_uri}`}} 
        />
        <View style={{flexDirection: "row", justifyContent: "space-between", flex:1,}}>
          
          <PanGestureHandler onGestureEvent={HandleMusicGesture} onHandlerStateChange={handleAlbumArtStateChand}>
            <Animated.View style={{ flexDirection: "row",  flex:1, paddingLeft: 10,  alignItems:"center",
              transform: [{ translateX: MusicTranslateX.interpolate({
              inputRange: [-300, 300],
              outputRange: [-300, 300],
              extrapolate: "clamp",
            })}]
          }}>
            { track.name !== '' && track.artist_name !== '' &&
              <>
                <Text style={{fontSize: 14, fontWeight: "bold" , color: "#FFFFFF"}} >{track.track_name}</Text>
                <Text style={{fontSize: 14, fontWeight: "bold" , color: "#ADADAD"}}> • {track.artist_name}</Text>            
              </>
            }
            </Animated.View>
          </PanGestureHandler>
        </View>
        </View>
        <View style={{ width: '18%', flexDirection: "row",backgroundColor: "#282828",alignItems: "center",  paddingLeft:10}}>

          <TouchableOpacity onPress={onFavoritePressed} disabled={track.name === ''? true: false} >
            <MaterialCommunityIcons style={{marginRight: 5}} {...favoriteIcon} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.playPauseMusic} disabled={track.name === ''? true: false} >
            <MaterialCommunityIcons name={props.playMusic? "pause": "play"} color="#FFFFFF" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  playerToggled: {
    height: 65, 
    flexDirection: "row",
    backgroundColor: "#282828", 
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  playerToggledAlbumMiniArt: {
    zIndex: 5,
    width: 65, height: '100%',
  }
})

const MyBottomTabBar = props => 
<>
  <PlayerToggled {...props}  />
  <BottomTabBar {...props} />
</>

const mapStateToProps    = state => ({ 
  index: state.player.index, 
  track: state.player.track,
  playMusic: state.player.playMusic 
});
const mapDispatchToProps = dispatch => bindActionCreators({ changeMusic, playPauseMusic }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyBottomTabBar);