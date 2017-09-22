import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';

class DrugScreen extends Component {
    static navigationOptions = {
        headerTitle: '투약 정보'
    }

    renderDrugDetail = (drugDetail) => {
        console.log(drugDetail);
        return drugDetail.map((data, index) => {
            return (
                <View key={index}>
                    <Text>이미지 들어갈 자리</Text>
                    <Text>{data.drugName}</Text>
                </View>
            );
        });
    }

    renderDrugList = ({item}) => {
        return (
            <ScrollView horizontal style={styles.back}>
                <Text>{item.key}</Text>
                {this.renderDrugDetail(item.drugs)}
            </ScrollView>
        );
    }

    render() {
        const patientDrug = [
            {
                key: 'today',
                drugs: [
                    {
                        drugName: 'hihi'
                    },
                    {
                        drugName: 'hihi2'
                    }]
            },
            {
                key: 'yesterday',
                drugs: [
                    {
                        drugName: 'byebye'
                    },
                    {
                        drugName: 'byebye2'
                    }]
            },
        ]

        const { renderDrugList } = this;
        return (
            <View>
                <FlatList
                    data = { patientDrug }
                    renderItem = { renderDrugList }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    back: {
        backgroundColor: 'teal',
    }
  })

export default DrugScreen;