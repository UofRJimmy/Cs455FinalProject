import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{

    render(){
    const {navigation} = this.props
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text_style}>Super Guide</Text>
        <Image source={{uri: 'http://icon.chrafz.com/uploads/151023/1-151023205A4619.png'}}
          style={styles.image_style} />
         
          <TouchableOpacity style={styles.Button}
            onPress={()=>{
                    navigation.navigate('SearchingPage')
                }}
            >
                <Text style={styles.SearchBar_text_style}>
                🔎     Search  a  game
                </Text>
            </TouchableOpacity>
                  
 

          <View style={styles.SuggestbBar_container}>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>navigation.navigate('EldenPage')}>
        <Image source={{uri:'https://img.yxss.com/m00/1b/62/5b490cbc19c845e923300278ea864640.jpg'}} style={styles.SuggestImage} />
        </TouchableOpacity >
        <TouchableOpacity onPress={()=>navigation.navigate('SekiroPage')}>
        <Image source={{uri:'https://pic4.zhimg.com/v2-3e7e8a639462fa1b2149ca7b25fbc02c_1440w.jpg?source=172ae18b'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('GhostwirePage')}>
        <Image source={{uri:'https://images.hdqwalls.com/wallpapers/ghostwire-tokyo-sc.jpg'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('CyberPunkPage')}>
        <Image source={{uri:'https://financerewind.com/wp-content/uploads/2020/07/cyberpunk-M.jpeg'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Slum')}>
        <Image source={{uri:'https://solismagazine.com/wp-content/uploads/2021/04/sifu-button-01-1614291963119.jpeg'}} style={styles.SuggestImage}/>
        </TouchableOpacity>
        </ScrollView>
        </View>
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
            <Text style={styles.Download_style}>This is a spot for Ads</Text>
        </TouchableOpacity>
        </View>
         
      </ScrollView>
      
    )}
    
  
    
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1487c9',
 
  },
  
  image_style:{
    backgroundColor: '#1487c9',
    marginTop:50,
    marginLeft:100,
    marginRight:20,
    padding: 100,
    height:10,
    width:10,
  },

  text_style:{
    fontFamily:'sans-serif',
    marginTop:10,
    color:'black',
    fontSize:18,
    fontWeight:'bold',
    textShadowColor:'#C0C0C0',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
    textAlign:'center',
  },
  Button:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
    padding:16,
    borderStyle:'dashed',
    borderColor:'#a3aeb5',
    borderRadius:20,
    backgroundColor:'#a3aeb5',
},

SearchBar_text_style:{
    color:'#c8cccf',
    textAlign:'left',
    fontSize:15,
},
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
},
SuggestbBar_container:{
  flexDirection:'row',
  backgroundColor:'#1487c9',
  height:200,
  marginTop:8, 
  resizeMode:'center',
},

SuggestImage:{
  alignItems:'center',
  padding:90,
  resizeMode:'cover',
  width:60, 
  height:60,
},
rowimage:{
  flexDirection:'row',
  
},
})