// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer}  from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack'
// import HomeScreen from './src/screens/HomeScreen'
// import TriviaScreen from './src/screens/TriviaScreen'
// import QuestionsScreen from './src/screens/QuestionsScreen'
// import MyTabs from './src/components/MyTabs'


// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Trivia: TriviaScreen,
//     Question: QuestionsScreen
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'The Next Street'
//     }
//   }
// )

// export default createAppContainer(navigator)


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './src/screens/MainTabScreen'




const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name='Main Tab' component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default App
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
