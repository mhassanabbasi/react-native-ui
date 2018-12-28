import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet,
  Image,
  ActivityIndicator } from 'react-native';
 import { 
   createAppContainer, 
   createStackNavigator, 
   StackActions, 
   NavigationActions, 
   createBottomTabNavigator } from 'react-navigation';

//Screen
//import AuthScreen from './src/screens/Auth/Authscreen';
import Login from './screen/Loginscreen';
import HomeScreen from './screen/homescreen';
import Register from './screen/register';
import Verify from './screen/verify';
import Carreg from './screen/carreg';
//Image
//import LogoImg from './images/logos.png';

class App extends React.Component {
  render() {
    return (

        <AppContainer />
          
    );
  }  
}
 const AppNavigator = createStackNavigator ({
   Login: {
     screen: Login,
     navigationOptions: {
       tabBarLabel: 'Main',
       header:null
     }
   },
   Home:{
    screen:HomeScreen
  },
  Reg:{
    screen:Register
  },
  ver:{
    screen:Verify
  },
  car:{
    screen:Carreg
  }
 }, {
     initialRouteName: 'Login',
 });
 const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f1e7fe',
    alignItems: 'center',
    justifyContent: 'center'
  }
  });

export default App;