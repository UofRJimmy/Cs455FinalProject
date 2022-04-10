import React from 'react';
import {Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';



export default class Slum extends React.Component{

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
        
        <Image source={require('./Slum.png')}
        style={styles.Guide_image_style} />
        
        <Text style={styles.Text_style}>
        {`
        1. Obtained after defeating the Skeleton Brothers (Key Keeper).
        
        2. Use the key to open the metal door to obtain.

        3. Go through the metal door behind the table to get the flyer.

        4. Found in the room where I met Fat Boy for the first time.

        5. Obtained after defeating the Skeleton Brothers (Key Keeper).

        6. Obtained after investigating the locked iron door before the final boss in Chapter 1.

        7. Obtained after encountering Fat Boy for the first time.

        8. Obtained in the locked room in front of the boss.
          
        9. Obtained on the table after the game starts.

        10. Obtained on the table in the pharmacy scene.

        11. Obtained before the boss battle, open room 206 of Jingxin Hall.

        12. Obtained by interacting with the shortcut of the gate on the ground floor of the first building.

        13. Obtained automatically when the game starts.

        14. After starting the game, it will be automatically obtained when encountering an enemy.

        15. Obtained in the kitchen after jumping to another apartment for the first time.

        16. Obtained after meeting the addict on the sofa in the room on the second floor of the first building.

        17. Found on the door of the shortcut of this level.`}
        </Text>
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
    height:500,
    width:400,
  },
  Text_style:{
    textAlign:'auto',
  }
})