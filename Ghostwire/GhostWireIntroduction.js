import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';


export default class GhostWireIntroduction extends React.Component{

    render(){
    const {navigation}=this.props
    
    return(
    
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={()=>{
                    navigation.navigate('GhostwirePage')
                }}>        
        <Image source={{uri:'https://th.bing.com/th/id/R.43658c4843114fcf674ff18861133ca0?rik=yCU505uM9kgJ1g&riu=http%3a%2f%2fimg2.3png.com%2f43658c4843114fcf674ff18861133ca090bd.png&ehk=Cw810rofMj9pO7mp6zeD1e3YJ58CoejQj1RbKqTB4U0%3d&risl=&pid=ImgRaw&r=0'}} 
        style={styles.Menu_style} />
        </TouchableOpacity>
        
        <View>
        <Image source={require('./image/OperationIntroduction.png')}
        style={styles.Guide_image_style} 
        />
        </View>
        
        <View style={styles.Text_window}>
        <Text style={styles.Text_style}>
        {`
        Left stick: move

        Right joystick: rotate the lens
        
        L3: Sprint
        
        R3: Slap/Cancel Charge Attack
        
        L3+R3: Absolute resonance
        
        Left cross key: switch royal
        
        Right cross key: not used
        
        On the cross key: switch lighting
        
        Under the cross key: switch between bow and ethereal combat skills
        
        □: Spirit Vision
        
        △: (short press) to switch consumables / (long press) to use consumables
        
        ○: Crouch/Stand/Cancel
        
        x: Jump/Confirm (L2+x) Ethereal Jump
        
        L1: Defense
        
        L2: Interact / Draw Bow / Prepare for Ethereal Leap / Grab Spirit / Absorb / Assist Aim
        
        R1: (short press) switch attack element / (long press) attack selection menu
        
        R2: Attack / Charge Attack / Draw Bow
        
        Menu key: Pause menu
        
        Touchpad: Game menu`}
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