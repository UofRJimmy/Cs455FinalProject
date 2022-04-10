import React from 'react';
import {Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';



export default class SekiroPage extends React.Component{

    render(){
    
    return(
      <ScrollView style={styles.container}>
        <TouchableOpacity >
        <Image source={{uri:'https://th.bing.com/th/id/R.43658c4843114fcf674ff18861133ca0?rik=yCU505uM9kgJ1g&riu=http%3a%2f%2fimg2.3png.com%2f43658c4843114fcf674ff18861133ca090bd.png&ehk=Cw810rofMj9pO7mp6zeD1e3YJ58CoejQj1RbKqTB4U0%3d&risl=&pid=ImgRaw&r=0'}} 
        style={styles.Menu_style} />
        </TouchableOpacity>
        <Image source={require('../externalSource/image/updating.png')} style={styles.Guide_image_style} />
        <Text style={styles.text_style}>
          {`More Guide is Coming......
            `}
          </Text>
      </ScrollView>
      
    )}
    
  
    
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1487c9',
  },
  Menu_style:{
    backgroundColor:'#eb3434',
    height:60,
    width:60,
  },
  Guide_image_style:{
    marginLeft:4,
    width: 400,
    height: 200,
    resizeMode: 'contain'
  },
  text_style:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'white'
  },

})