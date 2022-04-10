import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';


export default class EldenIntroduction extends React.Component{

    render(){
    const {navigation}=this.props
    
    return(
    
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={()=>{
                    navigation.navigate('EldenPage')
                }}>        
        <Image source={{uri:'https://th.bing.com/th/id/R.43658c4843114fcf674ff18861133ca0?rik=yCU505uM9kgJ1g&riu=http%3a%2f%2fimg2.3png.com%2f43658c4843114fcf674ff18861133ca090bd.png&ehk=Cw810rofMj9pO7mp6zeD1e3YJ58CoejQj1RbKqTB4U0%3d&risl=&pid=ImgRaw&r=0'}} 
        style={styles.Menu_style} />
        </TouchableOpacity>
        
        <View>
        <Image source={require('./image/EldenIntroduction.png')}
        style={styles.Guide_image_style} 
        />
        </View>
        
        <View style={styles.Text_window}>
        <Text style={styles.Text_style}>
        {`
        Defense: L1

        Combat Skill: L2
        
        Light Attack: R1
        
        Heavy Attack: R2
        
        Toggle Magic/Prayer: ↑
        
        Switch left hand weapon: ←
        
        Switch right hand weapon: →
        
        Switching props: ↓
        
        Move: Left stick
        
        Squat: L3
        
        Map: Touchpad
        
        Interaction: △
        
        Use props: □
        
        Roll/Sprint: ○
        
        Jump: x
        
        Operating lens: right joystick
        
        Lock: R3`}
        </Text>
        </View>
      </ScrollView>
     
    )}
    
  
    
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
   
  },
  
  Menu_style:{
    backgroundColor:'#eb3434',
    height:60,
    width:60,
  },
  Guide_image_style:{
    marginLeft:4,
    width: 400,
    height: 300,
    resizeMode: 'contain'
  },
  Text_style:{
    textAlign:'auto',
    textAlignVertical:'auto',
    fontSize:16
  },
  Text_window:{
    padding:20,
    
  }
})