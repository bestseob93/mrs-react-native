import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = (routeName) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
});

class SplashScreen extends Component {
    componentDidMount() {
        //  appInit();
        // 로그인 되있으면 탭 네비게이터
        // 아니면 로그인 화면으로
            let isAppReady = true;
            let isLoggedIn = false;
            if (isAppReady) {
                if (isLoggedIn) {
                    this._navigateTo('TabsNavigator')
                } else {
                    this._navigateTo('Login')
                }
            }
        }
        _navigateTo = (routeName) => {
            const actionToDispatch = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName })]
            })
            this.props.navigation.dispatch(actionToDispatch)
        }

    render() {
        return (
            <View />
        );
    }
}

export default SplashScreen;