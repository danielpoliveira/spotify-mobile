import React                                   from 'react';
import { View, Text, ScrollView, StyleSheet, } from 'react-native';
import AntIcon                                 from 'react-native-vector-icons/AntDesign';

export default () => 
  <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false} >

    <View style={{marginHorizontal: 10,marginBottom: 20,  alignItems: "flex-end"}}>
      <AntIcon  name="setting" color="#fff"  size={25} />  
    </View>


    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Tocadas recentemente</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection} >Novos episódios de podcasts</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Podcasts para você</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Feitos para Juliscreudo</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Seus podcasts mais escutados</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>100% você</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Para acompanhar seu dia</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>O melhor de cada artista</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Suas playlists</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Escute de novo</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Com base no que você ouviu recentemente</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Estações recomendadas</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Playlists populares</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Recomendadas para hoje</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Suas músicas e albums favoritos</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Lançamentos para você</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Astral</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Festa</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
    
    <View style={styles.listSection} > 
      <Text style={styles.titleListSection}>Jazz todo dia</Text>
      <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
        <View style={styles.miniCartItem}></View>
      </ScrollView>
    </View> 
</ScrollView>

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 20,
  },

  listSection: {
    marginBottom: 10,
    flexDirection: "column",
  },
  miniCartItem: {
    width: 150, height: 150,
    backgroundColor: "gray",
    margin: 10,
  },
  titleListSection: {
    marginHorizontal: 10,
    fontSize: 17,

    color: "#FFFFFF",
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
  }
})

