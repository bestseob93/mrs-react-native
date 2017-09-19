import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import AnimatedInput from '../AnimatedInput'
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
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        // TODO: 다음 화면 넘어가기
        console.log('submit pressed');
        console.log(ev.nativeEvent.text);
        this.props.navigation.dispatch(resetAction);
    }
    
    render() {
        const { handleSubmit } = this;
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <AnimatedInput
                        placeholder="환자번호를 입력해주세요"
                        autoFocus={true}
                        returnKeyType="done"
                        onSubmitEditing={handleSubmit}
                        isSecurity
                    />
                </View>
            </View>
        )
    }
}

export default PasswordScreen