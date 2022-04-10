import React from 'react';
import {Text,TouchableOpacity,View,StyleSheet,ScrollView} from 'react-native';

//let helperArray store the data from json file
let helperArray=require('./gamelist.json');

export default class Eldenring extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      allGame:helperArray,

    };
}
    render(){
    const{navigation}=this.props

    return(
      <ScrollView style={styles.container}>

        <View>  

        {this.state.allGame.map((item,index)=>(
        <TouchableOpacity style={styles.List_style}
        onPress={()=>{navigation.navigate(item.level)}}
        >
          <Text style={styles.Text_style}>
          {item.level}
          </Text>
        </TouchableOpacity>            
        )
        )}
        
        </View>
        
      </ScrollView>
      
    )}
    
  
    
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1487c9',
  },

  List_style:{
    backgroundColor:'#cfcbca',
    width:'80%',
    height:40,
    margin:20,
    alignItems:'center',
    justifyContent:'center',
    
  },

  Text_style:{
    fontSize:16,
    fontWeight:'bold',
  }

})