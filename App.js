import * as React from 'react';
import SearchingPage from './externalSource/SearchingPage';
import HomeScreen from './externalSource/HomeScreen'
import Updating from './externalSource/UpdatingPage';
//All Game Page
import SekiroPage from './Sekiro/SekiroPage';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//SiFuGuide folder import
import SiFu from './SiFuGuide/SiFuPage';
import Building from './SiFuGuide/Building';
import Slum from './SiFuGuide/Slum';
import Club from './SiFuGuide/Club';
import Gallery from './SiFuGuide/Gallery';
import MeditationHall from './SiFuGuide/MeditationHall';


//Ghostwire folder import
import Ghostwire from './Ghostwire/GhostwirePage';
import GhostWireIntroduction from './Ghostwire/GhostWireIntroduction.js';

//Eldenring folder import
import Eldenring from './Eldenring/EldenPage';
import EldenIntroduction from './Eldenring/EldenIntroduction';

//Cyberpunk folder import
import CyberPunk from './CyberPunk/CyberPunkPage';
import CyberPunkIntroduction from './CyberPunk/CyberPunkIntroduction';

const Stack=createNativeStackNavigator();
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={

      SiFu: [
        {
         Page: 'Slum',
         level: Slum
        },
        {
         Page: 'Club',
         level: Club
        },
        {
         Page: 'Gallery',
         level: Gallery
        },
        {
         Page: 'Building',
         level: Building
        },
        {
         Page: 'MeditationHall',
         level: MeditationHall
        },
        {
          Page: 'SiFu',
          level: SiFu
         },

     ],

     Ghostwire:[
       {
        Page: 'GhostWireIntroduction',
        level: GhostWireIntroduction
       },
       {
        Page: 'GhostwirePage',
        level: Ghostwire
       },
     ],

     Eldenring:[
       {
        Page: 'EldenIntroduction',
        level: EldenIntroduction
       },
       {
        Page: 'EldenPage',
        level: Eldenring
       },
    ],

    CyberPunk:[
      {
        Page: 'CyberPunkIntroduction',
        level: CyberPunkIntroduction
      },
      {
        Page: 'CyberPunkPage',
        level: CyberPunk
      },

    ]

    };
  }

  render(){   
    return(
      <NavigationContainer >
        <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='SearchingPage' component={SearchingPage} options={{ headerShown: false}}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='UpdatingPage' component={Updating} options={{ headerShown: false }}/>

        {/*sifu guide */}
        {this.state.SiFu.map((item,index)=>(
        <Stack.Screen name={item.Page} component={item.level} options={{ headerShown: true }}/>
        ))}

        {/* Ghostwire guide */}
        {this.state.Ghostwire.map((item,index)=>(
        <Stack.Screen name={item.Page} component={item.level} options={{ headerShown: true }}/>
        ))} 

          {/* Eldenring guide */}
        {this.state.Eldenring.map((item,index)=>(
        <Stack.Screen name={item.Page} component={item.level} options={{ headerShown: true }}/>
        ))} 

           {/* CyberPunk guide */}
        {this.state.CyberPunk.map((item,index)=>(
        <Stack.Screen name={item.Page} component={item.level} options={{ headerShown: true }}/>
        ))} 
        

        <Stack.Screen name='SekiroPage' component={SekiroPage} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
    
  }
}

