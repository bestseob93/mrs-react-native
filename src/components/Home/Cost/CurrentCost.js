import React from 'react';
import { View, Text, Touchable, Platform, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function CurrentCost(props) {
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <View style={styles.costContainer}>
            <Text style={styles.textCommon}>진료비 안내</Text>
            <Text style={[styles.textCommon, styles.costText]}>130,150원</Text>
            <Touchable onPress={props.openModal}>
                <View style={styles.btnWrapper}>
                    <Text style={[styles.textCommon, styles.btnText]}>세부 비용안내</Text>
                    <Icon name="ios-arrow-forward" color="#fff" style={{marginLeft: 10}} />
                </View>
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    costContainer: {
        flex: 1,
        backgroundColor: '#E76D5A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCommon: {
        color: 'white'
    },
    titleText: {
        fontSize: 12
    },
    costText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnWrapper: {
        borderWidth: 1,
        marginTop: 25,
        borderColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default CurrentCost;