import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {
    WeatherComponent,
    CurrentCost,
 } from '../components/Home';
 import Spinner from '../components/Spinner';

class HomeScreen extends Component {
    // static navigationOptions =  ({navigation}) => {
    //     const { state } = navigation;
    //     const { params= {} } = state;
    //     console.log(navigation);
    //     return {
    //         headerRight: <TouchableOpacity onPress={params.handleLogout}><Icon name="ios-log-out" size={20} style={{marginRight: 10}} /></TouchableOpacity>
    //     }
    // };
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            patientInfo: {
                patientName: '',
                date: ''
            }
        };
    }

    async componentDidMount() {
        // console.log(this.props.navigation);
        // this.props.navigation.setParams({
        //     handleLogout: this.onLogoutPress
        // });

        this.setState({
            loading: true
        });
        try {
            let token = await AsyncStorage.getItem('myToken');
            axios.get("http://13.125.12.85:3000/api/v1/patient/myInfo", {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                this.setState({
                    loading: false,
                    patientInfo: {
                        patientName: res.data[1].patientName,
                        date: moment(res.data[1].date.Admission).format('YYYY년 MM월 DD일 HH시 DD분 SS초')
                    }
                });

            }).catch((err) => {
                if(err) throw err;
                this.setState({
                    loading: false
                });
            });
        } catch (e) {
            if(e) throw e;
        }
    }

    // onLogoutPress = async () => {
    //     console.log('pressed');
    //     const { navigation } = this.props;
    //     try {
    //         await AsyncStorage.removeItem('myToken');
    //     } catch (e) {
    //         if(e) throw e;
    //     }
    // }

    openModal = () => {
        this.props.navigation.navigate('CostModal');
    }
    
    render() {
        return (
            <View style={styles.container}>
                { this.state.loading ? <Spinner /> : 
                    <View style={styles.profileContainer}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>B병동 211호</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, paddingBottom: 30}}>{this.state.patientInfo.patientName}님의 쾌유를 빕니다.</Text>
                        <Text style={{fontSize: 12}}>입원날짜: {this.state.patientInfo.date}</Text>
                    </View>
                }

                <View style={styles.componentContainer}>
                    <WeatherComponent />
                    <CurrentCost openModal={this.openModal} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileContainer: {
        flex: 0.65,
        backgroundColor: '#8CD7D6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    componentContainer: {
        flex: 0.35,
        flexDirection: 'row',
    }
});

export default HomeScreen;