import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Username from '../components/Auth/Username';

class LoginScreen extends Component {
    static navigationOptions = {

    }
    
    render() {
        return (
                <Username {...this.props} />
        );
    }
}

export default LoginScreen;