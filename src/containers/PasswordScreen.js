import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Password from '../components/Auth/Password';

class PasswordScreen extends Component {
    render() {
        return (
            <Password {...this.props} />
        );
    }
}

export default PasswordScreen;