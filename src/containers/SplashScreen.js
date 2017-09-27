import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = (routeName) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
});

class SplashScreen extends Component {
    async componentDidMount() {
        const { _navigateTo } = this;
        // TODO: 화면 네비게이터
        try {
            let token = await AsyncStorage.getItem('myToken');
            let isAppReady = true;
            if (isAppReady) {
                if (token) {
                    _navigateTo('TabsNavigator')
                } else {
                    _navigateTo('Login')
                }
            }
        } catch (e) {
            if(e) throw e;
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('------');
        console.log(this.props);
        console.log(nextProps);
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