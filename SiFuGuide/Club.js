import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';

export default class Club extends React.Component{

    render(){
    const {navigation}=this.props
    
    return(
    
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={()=>{
                    navigation.navigate('SiFu')
                }}>        
        <Image source={{uri:'https://th.bing.com/th/id/R.43658c4843114fcf674ff18861133ca0?rik=yCU505uM9kgJ1g&riu=http%3a%2f%2fimg2.3png.com%2f43658c4843114fcf674ff18861133ca090bd.png&ehk=Cw810rofMj9pO7mp6zeD1e3YJ58CoejQj1RbKqTB4U0%3d&risl=&pid=ImgRaw&r=0'}} 
        style={styles.Menu_style} />
        </TouchableOpacity>
        
        <View>
        <Image source={require('./Club.png')}
        style={styles.Guide_image_style} 
        />
        </View>
        
        <View style={styles.Text_window}>
        <Text style={styles.Text_style}>
        {`
        1. After the level starts, it will be automatically obtained when encountering an enemy.

        2. Talk to the bartender after entering the bar to get it. 
        
        3. Obtained after knocking over the long-legged dancer on the dance floor.
        
        4. Obtained after interacting with the door on the right side of the dance floor that requires a key card.
        
        5. Obtained after defeating Sean's disciple, this is the shortcut key card for this level.
        
        6. Obtain after investigating the password door on the left side of the dance floor.
        
        7. Obtained automatically after the game starts.
        
        8. Obtained automatically after the game starts.
        
        9. Obtained in the Fire Box.
        
        10. Obtained after defeating Sean's disciple.
        
        11. Obtained after asking the coach about the specific training content before the three trials.
        
        12. Talk to the glasses otaku in front of the DJ booth in the DJ room, select the option above, then select the option on the left to get it.
        
        13. Defeat the two thugs behind the password door to obtain, this is the key to open the fire box.
        
        14. Obtained after investigating all three signs on the wall in the alley with the Fire Box.
        
        15. Obtained after investigating the Fire Box.
        
        16. Obtained after entering the DJ room.`}
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
    height: 200,
    resizeMode: 'contain'
  },
  Text_style:{
    textAlign:'auto',
  },
  Text_window:{
    padding:20,
    
  },
})