import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { FlatList, StyleSheet, View, Text, Image, ScrollView, AsyncStorage, Button } from 'react-native';
class InfoScreen extends Component {
    static navigationOptions = {
        headerTitle: '한성병원'
    }

    onLogoutPress = async () => {
        console.log('pressed');
        const { navigation } = this.props;
        try {
            await AsyncStorage.removeItem('myToken');
            navigation.navigate('SplashScreen');
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



        const { renderHospInfo, renderDoctorList, onLogoutPress } = this;
        return (
            <View style={styles.infoContainer}>
                <View style={styles.imageContainerStyle}>
                    <Image resizeMode='cover' source={require('../imgs/main_image.jpeg')} style={styles.hospImageStyle} />
                    <View style={styles.hospCommentStyle}>
                        <Text style={{color:'white'}}>한성병원은 여러분을 응원합니다.</Text>
                    </View>
                </View>
                <View style={styles.doctorListStyle}>
                    <View style={ [styles.profileContainerStyle] }>
                        <Image resizeMode='cover' source={require('../imgs/lee.jpeg')} style={styles.profileImageStyle} />
                        <View style={styles.profileCommentStyle}>
                            <Text style={{color:'white'}}>병원장                   이환섭</Text>
                        </View>
                    </View>
                    <View style={ [styles.profileContainerStyle] }>
                        <Image resizeMode='cover' source={require('../imgs/kang.jpeg')} style={styles.profileImageStyle} />
                        <View style={styles.profileCommentStyle}>
                            <Text style={{color:'white'}}>부원장                   강민호</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.doctorListStyle}>
                    <View style={ [styles.profileContainerStyle] }>
                        <Image resizeMode='cover' source={require('../imgs/kwon.jpeg')} style={styles.profileImageStyle} />
                        <View style={styles.profileCommentStyle}>
                            <Text style={{color:'white'}}>담당의사                권형은</Text>
                        </View>
                    </View>
                    <View style={ [styles.logoutButtonStyle] }>
                        <Button title='로그아웃' onPress={onLogoutPress} />
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
            // shadowOffset: {
            //     width: 0,
            //     height: 1
            // },
            // shadowColor: 'black',
            // shadowOpacity: 1,
            flex: 0.35,
            position: 'relative'
        },
            hospImageStyle: {
                flex: 1,
                width: null,
                height: null
            },
            hospCommentStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                right: 10,
                bottom: 15
            },

        doctorListStyle: {
            flex: 0.31,
            flexDirection: 'row'
        },
            profileContainerStyle: {
                flex: 0.48,
                // justifyContent: 'center',
                // alignItems: 'center',
                marginLeft: 15,
                marginTop: 15,
                position: 'relative'
            },
                profileImageStyle: {
                    flex: 1,
                    width: null,
                    height: null
                },
                profileCommentStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    left: 10,
                    bottom: 5
                },
        
            logoutButtonStyle: {
                flex: 0.48,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 15,
            }
})

export default InfoScreen;
