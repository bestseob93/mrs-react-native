import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CostModalScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.totalCostContainer}>
                    <View style={styles.costWrapper}>
                        <Text style={styles.infoTitle}>(7)납부할 금액(6)-(5)</Text>
                        <Text style={styles.totalCost}>130,150원</Text>
                    </View>
                    <View style={styles.dateWrapper}>
                        <Text style={styles.commonText}>진료기간</Text>
                        <Text style={styles.commonText}>2017.09.28 - 2017.09.29</Text>
                    </View>
                    <View style={styles.departWrapper}>
                        <Text style={styles.commonText}>진료부서</Text>
                        <Text style={styles.commonText}>소아청소년과</Text>
                    </View>
                </View>
                <View style={styles.detailCostContainer}>
                    <View style={[styles.detailWrapper, styles.detailTitle]}>
                        <Text style={styles.commonText}>(6)환자 부담 총액{"\n"}(1)+(2)+(3)+(4)</Text>
                        <Text style={[styles.commonText, styles.redColor, styles.costWeight]}>175,150원</Text>
                    </View>
                    <View style={styles.detailWrapper}>
                        <Text style={styles.commonText}>(1)진찰료</Text>
                        <Text style={[styles.commonText, styles.redColor]}>30,100원</Text>
                    </View>
                    <View style={styles.detailWrapper}>
                        <Text style={styles.commonText}>(2)처치 및 수술료</Text>
                        <Text style={[styles.commonText, styles.redColor]}>62,050원</Text>
                    </View>
                    <View style={styles.detailWrapper}>
                        <Text style={styles.commonText}>(3)검사료</Text>
                        <Text style={[styles.commonText, styles.redColor]}>70,000원</Text>
                    </View>
                    <View style={styles.detailWrapper}>
                        <Text style={styles.commonText}>(4)선택 진료료</Text>
                        <Text style={[styles.commonText, styles.redColor]}>15,000원</Text>
                    </View>
                    <View style={styles.detailWrapper}>
                        <Text style={styles.commonText}>(5)이미 납부한 금액</Text>
                        <Text style={[styles.commonText, styles.blueColor]}>45,000원</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    totalCostContainer: {
        flex: 1,
        backgroundColor: '#bdbcff',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    detailCostContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    costWrapper: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#777'
    },
    dateWrapper: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#777'
    },
    departWrapper: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#f9f9f9'
    },
    detailTitle: {
        backgroundColor: '#f9f9f9'
    },
    commonText: {
        color: '#595959',
        fontSize: 12
    },
    infoTitle: {
        color: '#777',
        fontSize: 12
    },
    totalCost: {
        marginTop: 15,
        color: '#000',
        fontSize: 26,
        fontWeight: 'bold'
    },
    costWeight: {
        fontWeight: 'bold',
    },
    redColor: {
        color: '#ff9392'
    },
    blueColor: {
        color: '#8FB5E6'
    }
})

export default CostModalScreen;