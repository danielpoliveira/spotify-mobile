import React                                   from 'react';
import { View, Text, Image, TouchableOpacity, 
         Animated, StyleSheet, Dimensions }    from 'react-native';
import { PanGestureHandler, State }            from 'react-native-gesture-handler';
import Ionicons                                from 'react-native-vector-icons/Ionicons';
import MaterialIcons                           from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons                  from 'react-native-vector-icons/MaterialCommunityIcons';

const WINDOW = Dimensions.get("window");

export default ({ navigation, route }) => {
  let opened = false;
  let position = 0;
  let offset = 0;

  const absoluteX  = new Animated.Value(0);
  const AlbumArtTranslationX  = new Animated.Value(0);

  const handleTimeMusicGesture = Animated.event([{
    nativeEvent: {
      absoluteX: absoluteX,
    },

  }], { useNativeDriver: true,  listener:  
    e => {
      absoluteX.setOffset(0),
      absoluteX.setValue(e.nativeEvent.absoluteX)
    }
  });

  const handleAlbumArtgesture = Animated.event([{
    nativeEvent: { translationX: AlbumArtTranslationX}
  }], { 
    useNativeDriver: true,
  });

  const handleAlbumArtStateChand = (event) => { 
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      offset                += translationX;

      if(translationX >= 80) {
        opened   = !opened;
        position = opened? 1: 0;
      } 
      else if(translationX <= -80){
        opened   = !opened;
        position = opened? -1: 0;
      }
      else {
        AlbumArtTranslationX.setValue(offset);
        AlbumArtTranslationX.setOffset(0);
        offset = 0;
      }
       
      Animated.timing(AlbumArtTranslationX, {
        toValue: opened? position * 300 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened? position * 300 : 0;
        AlbumArtTranslationX.setOffset(offset);
        AlbumArtTranslationX.setValue(0);
      });
    }
  }

  return (
    <View style={{flex:1, backgroundColor: "#3C4A64", paddingHorizontal: 20}} >
  
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
          <Text style={{fontSize: 12, color: "#FFFFFF", fontWeight: "bold"}} >{route.params.playlist_name}</Text>
        </View>

        <TouchableOpacity>
          <MaterialIcons name="more-vert"      size={30} color={"#FFFFFF"} />
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center"}} >
        
        <PanGestureHandler onGestureEvent={handleAlbumArtgesture} onHandlerStateChange={handleAlbumArtStateChand} >
          <Animated.View style={{  
            shadowColor: "#000",    
            shadowOffset: { height:20},
            shadowOpacity: 1,
            elevation: 25,

            transform: [{ translateX: AlbumArtTranslationX.interpolate({
              inputRange: [-300, 300],
              outputRange: [-300, 300],
              extrapolate: "clamp",
            }) }]
            
          }}>
          <Image style={{width: 360, height: 360,}} source={{uri: route.params.albumArtUri}} />
          </Animated.View>
        </PanGestureHandler>
      </View>

      <View style={{paddingHorizontal: 10, paddingVertical: 12.5}}>
        <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "bold"}} >{route.params.music_name}</Text>
        <Text style={{fontSize: 17, color: "#CFCFCF"}} >{route.params.artist}</Text>
      </View>

      <View style={{flexDirection: "column", paddingHorizontal: 10, }}>
        <PanGestureHandler onGestureEvent={handleTimeMusicGesture}  >
          <Animated.View onTouchEnd={ e => absoluteX.setValue(e.nativeEvent.locationX) }>
            <View style={{width:'100%', height: 3.5, borderRadius: 20, backgroundColor: "#FFFFFF", justifyContent: "center", marginVertical: 10}} >
              <View style={{flex:1, overflow: "hidden"}}>
                <Animated.View 
                  style={{
                    borderRadius: 20,
                    flex:1, backgroundColor: "#333333ff", 
                    justifyContent: "center",
                    transform: [{ translateX: absoluteX.interpolate({
                      inputRange:  [0, WINDOW.width - 60 ],
                      outputRange: [0, WINDOW.width - 60 ],
                      extrapolate: "clamp",
                    }) }] 
                  }} 
                >
                </Animated.View>
              </View>
              <Animated.View style={{backgroundColor: "#FFF", width: 10, height: 10, borderRadius:100, position: "absolute",     
                transform: [{ translateX: absoluteX.interpolate({
                  inputRange:  [0, WINDOW.width - 70 ],
                  outputRange: [0, WINDOW.width - 70 ],
                  extrapolate: "clamp"}) 
                }]}} 
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
  );
}