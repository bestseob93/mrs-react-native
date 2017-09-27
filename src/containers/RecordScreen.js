import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    WebView,
    Dimensions
} from 'react-native';

class RecordScreen extends Component {
    static navigationOptions = {
        headerTitle: 'hihi'
    };

    renderItems = ({item}) => {
        return (
            <View key={item.date} style={styles.listContainer}>
                <View>
                    <WebView
                        source={{uri: 'http://52.78.80.125:4000/api/v1/auth_web/testWeb'}}
                        style={{width: Dimensions.get('window').width, height: 200}}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </View>
        );
    }

    render() {
        const data = [
            {
                date: '2017-09-22'
            },
            {
                date: '2017-09-23'
            },
            {
                date: '2017-09-24'
            },
            {
                date: '2017-09-25'
            }
        ];

        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
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
        paddingLeft: 10,
        paddingRight: 10,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#F67460',
        marginTop: 15,
        flexDirection: 'column',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowColor: 'blue',
        shadowRadius: 6,
        shadowOpacity: 0.4
    },
    textWrapper: {
        backgroundColor: '#f9f9f9'
    },
    dateText: {
        paddingLeft: 20,
        paddingVertical: 15,
        fontWeight: 'bold',
        color: '#8fb5e6'
    }
})

export default RecordScreen;