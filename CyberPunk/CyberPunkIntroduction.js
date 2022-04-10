import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';


export default class CyberPunkIntroduction extends React.Component{

    render(){
    const {navigation}=this.props
    
    return(
    
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={()=>{
                    navigation.navigate('CyberPunkPage')
                }}>        
        <Image source={{uri:'https://th.bing.com/th/id/R.43658c4843114fcf674ff18861133ca0?rik=yCU505uM9kgJ1g&riu=http%3a%2f%2fimg2.3png.com%2f43658c4843114fcf674ff18861133ca090bd.png&ehk=Cw810rofMj9pO7mp6zeD1e3YJ58CoejQj1RbKqTB4U0%3d&risl=&pid=ImgRaw&r=0'}} 
        style={styles.Menu_style} />
        </TouchableOpacity>
        
        <View>
        <Image source={require('./image/CyberPunkIntroduction.png')}
        style={styles.Guide_image_style} 
        />
        </View>
        
        <View style={styles.Text_window}>
        <Text style={styles.Text_style}>
        {`
        【Key and mouse operation】

        [regular]
        
        Zoom in/out: mouse wheel
        
        Mark: Press the mouse wheel
        
        [Explore and Battle]
        
        Move: W/A/S/D
        
        Jump: Spacebar
        
        Sprint (long press): RShift
        
        Sprint (Switch): LShift
        
        Crouch (long press): LCtrl
        
        Crouch (switch): C
        
        Switch weapons in sequence: Alt
        
        Weapon Wheel: Press and hold Alt
        
        Previous/Next Weapon: Mouse Wheel
        
        Weapon of choice: 1-3
        
        Unarmed/Melee: 4
        
        Shooting: left mouse button
        
        Aim: Right mouse button
        
        Dexterity Attack (armed melee): Q
        
        Reload: R
        
        Operating system: E
        
        Use combat aids: middle mouse button
        
        Use consumables: X
        
        Scan (long press): Tab
        
        Scan (Switch): Caps Lcock
        
        Open the phone: T
        
        Open notification: Z
        
        Skip the dialogue: C
        
        Open Photo Mode: N
        
        [UI panel]
        
        Previous item: 1
        
        Next item: 3
        
        Quick crack details: Z
        
          [vehicle]
        
        Acceleration: W
        
        Brakes: S
        
        Left/Right: A/D
        
        Switch the driving angle: Q
        
        Get off: F
        
        Flip camera: middle mouse button
        
        Switch lights in sequence: Alt
        
        Handbrake: Space
        
        Speaker: LCtrl
        
        Radio: R
        
        Armored vehicle main gun: left mouse button
        
        Armored Vehicle Missile Launcher: Right mouse button
        
        Armored Vehicle Smoke Screen: LCtrl
        
        Call Vehicle: V
        
        [Super dream experience]
        
        Pause the Mewtwo experience: Spacebar
        
        Fast forward/rewind Mewtwo experience: E/Q
        
        Change the Mewtwo experience encoding layer: LShift
        
        Analysis Mode: Tab
        
        Restart the Mewtwo experience: R
        
        Exit the Mewtwo experience: X
        
        【Handle operation】

        Game menu: View key
        
        Game Pause: Menu key
        
        Quick Scan/Scan Mode: LB
        
        Use/Aim Combat Support Item: RB
        
        Block/Aim: LT
        
        Shooting/Quick Attack/Heavy Attack: RT
        
        Sprint: L3
        
        Photo Mode: L3+R3
        
        Move: Left stick
        
        Interaction/Reload: X
        
        Draw gun / put away weapon: Y / double click Y
        
        Shortcut menu: long press Y
        
        Handbrake: A
        
        Crouching: B
        
        (Talk) Up/Use Item/(Aim) Zoom In: ↑
        
        (dialogue) down/(aim) zoom out/switch targets in sequence: ↓
        
        Phone menu: press and hold ↓
        
        Turn on notifications: ←
        
        Call the vehicle: →
        
        Open the garage: press and hold →
        
        Agility Melee Attack/(Scan) Marked Target: R3
        
        Right stick: observe`}
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