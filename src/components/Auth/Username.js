import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'

import AnimatedInput from '../AnimatedInput'
import Spinner from '../Spinner'
import styles from './style'

const resetAction = (routeName, username) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName, username })
    ]
});

class Username extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            isValid: false,
            errMessage: ''
        };
    }

    handleSubmit = (ev) => {
        
        const patientName = ev.nativeEvent.text;
        // TODO: 다음 화면 넘어가기
        this.setState({
            loading: true
        });

        axios.post("http://13.125.12.85:3000/api/v1/patient/chkPatientName", {
            patientName
        }).then((res) => {
            this.setState({
                isValid: true,
                loading: false
            });
            this.props.navigation.dispatch(resetAction('Password', patientName));
        }).catch((err) => {
            console.log(err.response);
            this.setState({
                loading: false,
                errMessage: err.response.data.message
            });
        });
    }
    render() {
        const {
            handleSubmit,
        } = this;
        return (
            <View style={styles.container}>
            <View style={styles.inputWrapper}>
                {
                    this.state.loading ? <Spinner /> : 
                    <AnimatedInput
                        placeholder="환자분 성함을 입력해주세요"
                        autoFocus={true}
                        returnKeyType="done"
                        onSubmitEditing={handleSubmit}
                    />
                }
                <Text style={styles.errMessage}>{this.state.errMessage}</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textStyle}>
                    환자번호 찾기
                </Text>
                <Text style={styles.textStyle}>
                    먼저 둘러봐요.
                </Text>
            </View>
        </View>
        );
    }
}

export default Username;