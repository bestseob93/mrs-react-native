import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'

import AnimatedInput from '../AnimatedInput'
import Spinner from '../Spinner'
import styles from './style'

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'TabsNavigator' })
    ]
})

class PasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            loading: false,
            errCode: null
        };
    }

    handleSubmit = (ev) => {
        const patientBarcode = ev.nativeEvent.text;
        const patientName = this.props.navigation.state.username;
        this.setState({
            loading: true
        });

        axios.post("http://13.125.12.85:3000/api/v1/patient/signIn", {
            patientName,
            patientBarcode
        }).then((res) => {
            AsyncStorage.setItem('myToken', res.data.token);
            console.log(res.data.token);
            this.setState({
                isValid: true,
                loading: false
            });
            this.props.navigation.dispatch(resetAction);
        }).catch((err) => {
            console.log(err.response);
            this.setState({
                loading: false,
                errCode: err.response.data.code
            });
        });
    }
    
    render() {
        const { handleSubmit } = this;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    {
                        this.state.loading ? <Spinner /> :
                        <AnimatedInput
                            placeholder="환자번호를 입력해주세요"
                            autoFocus={true}
                            returnKeyType="done"
                            onSubmitEditing={handleSubmit}
                            isSecurity
                        />
                    }
                    <Text style={styles.errMessage}>
                        {this.state.errCode === 1 ? '올바른 환자번호를 입력해주세요.' : ''}
                    </Text>
                </View>
            </View>
        )
    }
}

export default PasswordScreen