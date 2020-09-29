import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import TriviaScreen from './src/screens/TriviaScreen'
import QuestionsScreen from './src/screens/QuestionsScreen'
import ResultsScreen from './src/screens/ResultsScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Trivia: TriviaScreen,
    Question: QuestionsScreen,
    Result: ResultsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'The Next Street'
    }
  }
)

export default createAppContainer(navigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
