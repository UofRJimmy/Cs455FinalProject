import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';


export default class Gallery extends React.Component{

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
        <Image source={require('./Building.png')}
        style={styles.Guide_image_style} 
        />
        </View>
        
        <View style={styles.Text_window}>
        <Text style={styles.Text_style}>
        {`
        1. Obtained in the room where the enemy is meeting and negotiating.

        2. Obtained automatically after defeating enemies within the company.
        
        3. Obtained after investigating Jinfeng's computer.
        
        4. Obtained after investigating the elevator on the right side of the lobby.
        
        5. Obtained after encountering assassins in the valley.
        
        6. Enter the level and get it automatically.
        
        7. Enter the level and get it automatically.
        
        8. Obtained in Jinfeng's safe.
        
        9. Automatically obtained after entering the canyon.
        
        10. Obtained after encountering a small boss in the canyon.
        
        11. Obtained after opening Jinfeng's safe.
        
        12. Obtained from the table on the left side of the lobby at the beginning.
        
        13. Obtained in Jinfeng's safe, this is the key to open the black wood workshop of the art museum.
        
        14. Automatically obtained (doubtful).
        
        15. Obtained automatically after encountering the first small boss.
        
        16. Obtained automatically after encountering the second small boss.
        
        17. Obtained after defeating the second small boss.`}
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
  },
  Text_window:{
    padding:20,
    
  }
})