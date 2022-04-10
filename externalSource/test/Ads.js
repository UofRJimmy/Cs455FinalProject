import React from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'

export default class Adsbar extends React.Component{
    render(){
    return(
        <View style={styles.Ads_style}>
            <View style={styles.Ads_container}>
       <Image source={{uri:'https://www.reckontalk.com/wp-content/uploads/2016/04/Mcdonalds-i-m-lovin-it.jpg'}}
        style={styles.Ads_image}/>
        <Text style={styles.Ads_text}>Mcdonald:</Text>
        <View>
        <Text>Your best food ↓</Text>
        <Text>Your best food ↓</Text>
        <Text>Your best food ↓</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.Jump_to_button}>
            <Text style={styles.Download_style}>Download Now</Text>
        </TouchableOpacity>
        </View>
    )
    }
}

const styles=StyleSheet.create({
    Ads_style:{
    backgroundColor:'#eb3434',
    height:80,
    marginTop:8,
    marginLeft:20,
    marginRight:8,
    borderRadius:14,
    width:'90%',
  },

  Ads_container:{
    flexDirection:'row',
  },

  Ads_text:{
      marginTop:10,
    marginLeft:10,
    fontWeight:'bold',
    fontSize:20,
    
  },

  Ads_image:{
    borderRadius:5,
    padding:20,
    height:10,
    width:10,
    marginLeft:16,
    marginTop:4,
    marginBottom:4,
  },

  Download_style:{
    textAlign:'center',
    fontSize:12,
    color:'#3794db',
    fontWeight:'bold',
  },

  Jump_to_button:{
      backgroundColor:'powderblue',
      color:'#FFF',
      borderRadius:3,
      marginLeft:16,
      width:'90%',
      height:20,
  }
});