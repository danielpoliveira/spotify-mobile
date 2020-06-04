import React, { useState, useEffect }                    from 'react';
import { 
  YellowBox,
  TouchableOpacity, View, Text, Image, StyleSheet, 
  FlatList, SafeAreaView, ScrollView, 
}                                                        from 'react-native';
import Ionicons                                          from 'react-native-vector-icons/Ionicons';
import api                                               from '../../services/api';

YellowBox.ignoreWarnings([ 'VirtualizedLists should never be nested' ]);

const FAV_GENDER_DATA = [
  {id: "00", name: "Hip Hop"},
  {id: "01", name: "Eletrônica/Dance"},
  {id: "02", name: "Pop"},
  {id: "03", name: "Indie"},
];

const GenderView = props => 
<View style={[styles.genderView, {backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16) || 'gray'} , props.index % 2 === 0?{marginRight: 15}:{} ]}>
  <Text style={{ marginLeft: 10, marginTop: 15, color:"#FFFFFF"}}>{props.item.name}</Text>
</View>
  
export default () => {
  const [categories, setCategories] = useState({});
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const loadCategories  = async () => {
      const res = await api.get("/browse/categories?country=BR&locale=pt_BR&limit=20");
      const items = res.data.categories.items;

      setCategories(items)

      const aux = items.map(async function(item) {      
        return await api.get(`/browse/categories/${item.id}/playlists?limit=1`)
                          .then(res => ({ [item.id]: res.data.playlists.items[0].images[0].url }));
      });

      Promise.all(aux).then(function(results) {
        setImgs(results);
      });
    }

    loadCategories();
  },[]);

  const GenderItemView = props => 
  <View style={[styles.genderView,{backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)}, props.index % 2 === 0? { marginRight: 15 } : {} ]}>
    <Text style={styles.genreTitle}>{props.item.name}</Text>
    { imgs[props.index] && 
      (<Image style={styles.genreMiniArt} source={{ uri: imgs[props.index][props.item.id] }} />) 
    }
    
  </View>
      


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.searchHeaderView}>
        <Text style={styles.searchTitle}>Buscar</Text>  
        <TouchableOpacity style={styles.searchButtonArea}>
          <Ionicons name="ios-search" size={20}  />
          <Text style={styles.searchButtonTitle} >
            Artistas, músicas ou podcasts
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{marginBottom: 180}} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.sectionTitle} >Seus genêros favoritos</Text>
          <FlatList 
            data={FAV_GENDER_DATA} 
            scrollEnabled={false}
            keyExtractor={gender => gender.id} 
            renderItem={item => GenderView(item)}
            numColumns={2}
          />
        </View>
        
        <View>
          <Text style={styles.sectionTitle} >Navegar por todas as seções</Text>
          <FlatList  
            scrollEnabled={false}
            data={categories} 
            keyExtractor={gender => gender.id} 
            renderItem={item =>  GenderItemView(item)}
            numColumns={2}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal   : 10,
  },

  searchHeaderView: {
    paddingTop          : 80,
    alignItems          : "center",
  },

  searchTitle: {
    color               : "#FFFFFF",
    fontSize            : 30,
    fontWeight          : "bold",
  },

  searchButtonArea: {
    backgroundColor     : "#FFFFFF",
    width               : '100%',
    flexDirection       : "row",
    justifyContent      : "center",
    marginTop           : 15,
    padding             : 15,
    borderRadius        : 5,  
  },

  searchButtonTitle: {
    marginLeft          : 10, 
    fontWeight          : "bold",
  },

  sectionTitle:{
    color               : "#FFFFFF",
    fontSize            : 14,
    fontWeight          : "bold",
    marginVertical      :15,
  },
  
  genderView: {
    overflow            : "hidden",
    height              : 100,
    marginBottom        : 15,
    borderRadius        : 5,    
    flex                : 1/2,
  },

  genreTitle: { 
    marginLeft          : 10, 
    marginTop           : 15, 
    color               :"#FFFFFF",
  },

  genreMiniArt: {
    width               : 85, 
    height              : 85, 
    marginRight         : -20, 
    alignSelf           : 'flex-end',
    transform           : [{ rotate: "30deg" }],
  }
});