import React from 'react'
import {StyleSheet,View,Image,TouchableOpacity,Dimensions,ScrollView} from 'react-native'


export default class SuggestbBar extends React.Component{
    render(){
    return(
        <View style={styles.SuggestbBar_container}>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
        <Image source={{uri:'https://img.yxss.com/m00/1b/62/5b490cbc19c845e923300278ea864640.jpg'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri:'https://pic4.zhimg.com/v2-3e7e8a639462fa1b2149ca7b25fbc02c_1440w.jpg?source=172ae18b'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri:'https://images.hdqwalls.com/wallpapers/ghostwire-tokyo-sc.jpg'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri:'https://financerewind.com/wp-content/uploads/2020/07/cyberpunk-M.jpeg'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri:'https://solismagazine.com/wp-content/uploads/2021/04/sifu-button-01-1614291963119.jpeg'}} style={styles.SuggestImage} />
        </TouchableOpacity>
        </ScrollView>
        </View>
)}
}

const styles=StyleSheet.create({
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

})