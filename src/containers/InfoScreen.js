import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { FlatList, StyleSheet, View, Text, Image, ScrollView, Button, AsyncStorage } from 'react-native';

class InfoScreen extends Component {
    static navigationOptions = {
        headerTitle: '한성병원'
    }

    onLogoutPress = async () => {
        console.log('pressed');
        const { navigation } = this.props;
        try {
            await AsyncStorage.removeItem('myToken');
        } catch (e) {
            if(e) throw e;
        }
    }

    render() {
        const patientInfo = [
            {
                key: 'patient_1',
                patientHosp: '한성병원',
                patientName: '강민호',
                patientIn: '303호',
                hospMaster: '이환섭',
                hospDoctor: '박주만',
                hospNurse: '권형은'
            },
            {
                key: 'patient_2',
                patientHosp: '한성병원',
                patientName: '김택경',
                patientIn: '304호',
                hospMaster: '이환섭',
                hospDoctor: '박주만',
                hospNurse: '권형은'
            }
        ]



        const { renderHospInfo, renderDoctorList } = this;
        return (
            <View style={styles.infoContainer}>
                <View style={styles.imageContainerStyle}>
                    <Image source={require('../imgs/main_image.jpeg')} style={styles.hospImageStyle} />
                </View>
                <View style={styles.doctorListStyle}>
                    <View style={ [styles.profileStyle, {backgroundColor:'yellow'}] }>
                        <Text>이환섭</Text>
                    </View>
                    <View style={ [styles.profileStyle, {backgroundColor:'yellow'}] }>
                        <Text>박주만</Text>
                    </View>
                </View>
                <View style={styles.doctorListStyle}>
                    <View style={ [styles.profileStyle, {backgroundColor:'yellow'}] }>
                        <Text>권형은</Text>
                        <Button title="로그아웃" onPress={this.onLogoutPress} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: 'white',
        flex: 1
    },
        imageContainerStyle: {
            flex: 0.3,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowColor: 'black',
            shadowOpacity: 1,
            marginBottom: 20
        },
            hospImageStyle: {
                width: 375,
                height: 200
            },
        doctorListStyle: {
            backgroundColor: 'skyblue',
            flexDirection: 'row',
            flex: 0.7,
        },
            profileStyle: {
                flex: 0.5,
            }
            

})

export default InfoScreen;
