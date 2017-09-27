import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

class WeatherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todayWeather: {
                sky: 'ios-sunny-outline',
                skyText: '',
                temperature: 0
            }
        };
    }

    setSkyCode = (skyCode) => {
        switch(skyCode) {
            case 'SKY_D01':
                return "ios-sunny-outline";
            case 'SKY_D02':
                return "ios-partly-sunny-outline";
            case 'SKY_D03':
                return "ios-cloudy-outline";
            case 'SKY_D04':
                return "ios-cloudy";
            case 'SKY_D05':
                return "ios-rainy-outline";
            case 'SKY_D06':
                return "ios-snowy";
            case 'SKY_D07':
            // 온도에 따라 비/눈 처리하기
                return "ios-rainy";
            default:
                return "ios-sunny-outline";
        }
    }

    componentDidMount() {
        const appKey = '6e52b171-e0aa-33cb-b127-cad741ce7e09';
        navigator.geolocation.getCurrentPosition(({coords}) => {
            axios.get(`http://apis.skplanetx.com/weather/summary?appKey=${appKey}&version=1&lat=${coords.latitude}&lon=${coords.longitude}`
            ).then((res) => {
                console.log(res);
                this.setState({
                    todayWeather: {
                        sky: this.setSkyCode(res.data.weather.summary[0].today.sky.code),
                        skyText: res.data.weather.summary[0].today.sky.name,
                        temperature: Math.round(res.data.weather.summary[0].today.temperature.tmax)
                    }
                });
            }).catch((err) => {
                if(err) throw err;
            });
        });
    }

    render() {
        return (
            <View style={styles.weatherContainer}>
                <Icon name={this.state.todayWeather.sky} size={100} color="#fff" />
                <Text style={{color: 'white'}}>{this.state.todayWeather.skyText}</Text>
                <Text style={{color: 'white'}}>{this.state.todayWeather.temperature}도</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#8FB5E6',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default WeatherComponent;