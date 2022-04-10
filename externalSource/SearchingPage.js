import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TextInput,TouchableOpacity} from 'react-native';


//let helperArray store the data from json file
let helperArray=require('./gamelist.json');
export default class SearchingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      allGame:helperArray,
      GameFiltered:helperArray,
    };
    
}
  
 
//search a specific game
      searchGame(TextTosearch){
      this.setState({
        GameFiltered:this.state.allGame.filter(i=>i.game.toLowerCase().includes(TextTosearch)), 
      })
      }

    render(){ 
      const {navigation} = this.props
       return (
        <ScrollView style={styles.container}>
        <View style={{flexDirection:'row'}}>

        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Image source={{uri:'http://bpic.588ku.com/element_pic/01/47/97/9357440c732120a.jpg'}} style={styles.icon_image} />
        </TouchableOpacity>

          <TextInput placeholder="🔎   Search  a  game"
              onChangeText={text=>{this.searchGame(text)}}
              style={styles.input}  
              //onSubmitEditing={ () => alert()}
          />

          </View>
          {this.state.GameFiltered.map((item,index)=>(

             <Text 
             onPress={()=>{
              navigation.navigate(item.name)}}
             style={styles.gamelist}>{item.game}</Text>            
          ))}
          </ScrollView >
       );
    }
}


const styles=StyleSheet.create({
     container:{
        marginTop: 10 
     },
     Search_text_style:{
      flex: 1,
      color: 'black',
      fontSize:15,
      padding:20,
     },
    gamelist: {
    marginLeft:10,
    marginRight:10,
    marginTop: 5,
    padding: 30,
  },
  input: {
    height: 40,
    width:'85%',
    marginTop: 12,
    marginBottom:12,
    borderWidth: 1,
    padding: 10,
  },
  icon_image:{
  borderRadius:5,
  padding:15,
  marginTop:18,
  marginLeft:10,
  marginRight:6,
  backgroundColor:'grey'
},
    })
