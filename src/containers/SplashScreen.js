import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = (routeName) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
});

class SplashScreen extends Component {
    
    onLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    onTabPress = () => {
        this.props.navigation.dispatch(resetAction('TabsNavigator'));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SplashScreen</Text>
                <Button onPress={this.onLoginPress} title="To Login" />
                <Button onPress={this.onTabPress} title="To Tabs" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
});

export default SplashScreen;