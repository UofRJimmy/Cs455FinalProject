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
        <Image source={require('./Gallery.png')}
        style={styles.Guide_image_style} 
        />
        </View>
        
        <View style={styles.Text_window}>
        <Text style={styles.Text_style}>
        {`
        1. Obtained after defeating the woman on the third floor who is looking at the mask

        2. Obtained on the table before entering the first exhibition.
        
        3. Obtained after defeating the enemies you just met at the beginning.
        
        4. Enter the level and get it automatically.
        
        5. Obtained after investigating the mask the woman on the third floor is looking at.
        
        6. Obtained after investigating the stairway door.
        
        7. Obtained on the table before entering the second exhibit.
        
        8. Obtained after defeating the small boss.
        
        9. Obtained after investigating the elevator in the exhibition hall.
        
        10. Obtained after defeating Sean's disciple in the exhibition hall.
        
        11. Obtained after defeating the small BOSS bodyguard.
        
        12. Obtained on the table before entering the fourth exhibit.
        
        13. Found in the black wood workshop on the fourth floor.
        
        14. Obtained after defeating the twin bosses, this is the key to the shortcut elevator.
        
        15. Enter the level and get it automatically.
        
        16. Obtained on the table before entering the third exhibit.
        
        17. Obtained from the table in the lobby on the first floor of the exhibition hall.
        
        18. Obtained after investigating the door of the black wood workshop on the fourth floor.
        
        19. Automatically obtained in the fourth exhibition.`}
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
    textAlignVertical:'auto',
  },
  Text_window:{
    padding:20,
    
  }
})