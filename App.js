import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  DrugScreen,
  InfoScreen,
  LoginScreen,
  PasswordScreen,
  RecordScreen,
  RingerScreen,
  SplashScreen,
} from './src/containers';

const TabNav = TabNavigator(
  {
    Ringer: {
      screen: RingerScreen,
      path: '',
    },
    Drug: {
      screen: DrugScreen,
      path: 'drug',
    },
    Record: {
      screen: RecordScreen,
      path: 'record',
    },
    Info: {
      screen: InfoScreen,
      path: 'info',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      labelStyle: {
        fontSize: 14
      },
      showIcon: false,
      animationEnabled: true
    },
  }
)

const App = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Password: {
      screen: PasswordScreen,
      navigationOptions: {
        header: null,
      }
    },
    TabsNavigator: {
      screen: TabNav,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: 'float',
  }
);

export default App;