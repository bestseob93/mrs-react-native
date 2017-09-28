import React, { Component } from 'react';
import { Video } from 'expo';
import axios from 'axios';
import moment from 'moment';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    WebView,
    Dimensions,
    AsyncStorage
} from 'react-native';

class RecordScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: null,
            loading: false,
            recordFiles: []
        };
    }
    static navigationOptions = {
        headerTitle: '녹화기록'
    };

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
            axios.get("http://13.125.12.85:3000/api/v1/patient/recordFiles", {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                this.setState({
                    loading: false,
                    recordFiles: res.data.reverse(),
                });

                console.log(res.data);

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

    renderItems = ({item}) => {
        return (
            <View key={item.fileName} style={styles.listContainer}>
                <View onLayout={this.onLayout}>
                    <Video
                        source={{ uri: item.fileName}}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        resizeMode="cover"
                        useNativeControls
                        isLooping
                        style={{width: this.state.width, height: 200}}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.doctorText}>의사 {item.doctorName} 진료</Text>
                    <Text style={styles.dateText}>{moment(item.recordedTime).format('YYYY년 MM월 DD일 HH시 DD분 SS초')}</Text>
                </View>
            </View>
        );
    }

    onLayout = (ev) => {
        console.log(ev.nativeEvent.layout.width);
        this.setState({
            width: ev.nativeEvent.layout.width,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.recordFiles}
                    renderItem={this.renderItems}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listContainer: {
        flex: 1,
        marginBottom: 30,
        flexDirection: 'column',
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginLeft: 10,
        marginRight: 10,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.4
    },
    textWrapper: {
        backgroundColor: '#f9f9f9',
        flexDirection: 'row'
    },
    doctorText: {
        paddingVertical: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    dateText: {
        paddingLeft: 20,
        paddingVertical: 16,
        fontWeight: 'bold',
        color: '#8fb5e6',
        fontSize: 12
    },
    video: {
        width: null,
        height: null,
        flex: 1
    }
})

export default RecordScreen;