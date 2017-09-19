import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import AnimatedInput from '../AnimatedInput';
import styles from './style';

const resetAction = (routeName, username) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName, username })
    ]
});

class Username extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        
        // TODO: 다음 화면 넘어가기
        console.log('submit pressed');
        console.log(ev.nativeEvent.text);
        console.log(this.props);
        this.props.navigation.dispatch(resetAction('Password', ev.nativeEvent.text));
    }
    render() {
        const {
            handleSubmit,
        } = this;
        return (
            <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <AnimatedInput
                    placeholder="환자분 성함을 입력해주세요"
                    autoFocus={true}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                />
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