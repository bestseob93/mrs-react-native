import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, Image, ScrollView, Modal, TouchableHighlight } from 'react-native';

class DrugScreen extends Component {
    static navigationOptions = {
        headerTitle: '투약 정보'
    }

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    renderDrugDetail = (drugDetail) => {
        console.log(drugDetail);
        return drugDetail.map((data, index) => {
            return (
                <View style={styles.drugDetailStyle}>
                    <Modal
                        animationType="fade"
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        presentationStyle={'fullScreen'}
                    >
                        <View style={styles.modalContainerStyle}>
                            
        
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                            <View>
                                <Image resizeMode='stretch' source={require('../imgs/A11A4380A004901.jpg')} style={styles.modalDrugImageStyle} />
                                <Text style={styles.modalDrugNameStyle}>약 이름</Text>
                                <Text style={styles.modalDrugDetailStyle}>약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. 약 상세정보입니다. </Text>
                            </View>
                            </TouchableHighlight>
        
                        </View>
                    </Modal>
      
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <View key={index} >
                            <Image source={require('../imgs/A11A4380A004901.jpg')} style={styles.drugImageStyle} />
                            <Text style={styles.drugDescription}>{data.drugName}</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                
            );
        });
    }

    renderDrugList = ({item}) => {
        return (
            <View style={styles.listContainer}>
                <Text style={styles.drugDateStyle}>{item.key}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {this.renderDrugDetail(item.drugs)}
                </ScrollView>
            </View>
        );
    }

    render() {
        const patientDrug = [
            {
                key: 'Today',
                drugs: [
                    {
                        drugName: 'hihi',
                        drugImage: ''
                    },
                    {
                        drugName: 'hihi2',
                        drugImage: ''
                    }]
            },
            {
                key: 'Yesterday',
                drugs: [
                    {
                        drugName: 'byebye',
                        drugImage: ''
                    },
                    {
                        drugName: 'byebye2',
                        drugImage: ''
                    }]
            },
        ]

        const { renderDrugList } = this;
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={patientDrug}
                    renderItem={renderDrugList}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
        listContainer: {
            
        },
            drugDateStyle: {
                padding: 10,
                paddingBottom: 0,
                marginLeft: 5,
                fontSize: 30,
                fontWeight: 'bold'
            },
            drugDetailStyle: {
                // borderColor: 'grey',
                // borderWidth: 0.1,
                borderRadius: 10,
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowColor: 'grey',
                shadowOpacity: 0.3,
                padding: 10,
                margin: 10,
                marginBottom: 20
            },
                drugImageStyle: {
                    width: 250,
                    height: 140
                },
                drugDescription: {
                    textAlign: 'center'
                },
            modalContainerStyle: {
                borderRadius: 10,
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowColor: 'grey',
                shadowOpacity: 0.3,
                padding: 10,
                marginTop: 50,
                margin: 20
            },
                modalDrugImageStyle: {
                    width: '100%',
                    height: 140,
                    marginBottom: 10
                },
                modalDrugNameStyle: {
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                modalDrugDetailStyle: {
                    margin: 5
                }
})

export default DrugScreen;
