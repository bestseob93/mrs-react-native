import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  CostModalScreen,
  DrugScreen,
  InfoScreen,
  LoginScreen,
  PasswordScreen,
  RecordScreen,
  HomeScreen,
  SplashScreen,
} from './src/containers';

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home',
    navigationOptions: {
      headerTitle: '홈'
    }
  },
  CostModal: {
    screen: CostModalScreen,
    path: 'home/cost',
    navigationOptions: {
      headerTitle: '외래 진료비 계산서'
    }
  },
}, {
  mode: 'modal'
});

const TabNav = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      path: '',
      navigationOptions: {
        header: null,
        title: "홈"
      }
    },
    Drug: {
      screen: DrugScreen,
      path: 'drug',
      navigationOptions: {
        title: "투약기록"
      }
    },
    Record: {
      screen: RecordScreen,
      path: 'record',
      navigationOptions: {
        title: "녹화기록"
      }
    },
    Info: {
      screen: InfoScreen,
      path: 'info',
      navigationOptions: {
        title: "담당의료진"
      }
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
      screen: TabNav
    }
  },
  {
    headerMode: 'float'
  }
);

export default App;