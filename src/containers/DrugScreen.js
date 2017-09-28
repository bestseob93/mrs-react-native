import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, Image, ScrollView, Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';

class DrugScreen extends Component {
    static navigationOptions = {
        headerTitle: '투약 정보'
    }

    constructor(props) {
        super(props);

        this.state = {
            drugs: [],
            modalVisible: false,
            modalIndex: ''
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
            axios.get("http://13.125.12.85:3000/api/v1/patient/myMedical", {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                console.log("서버로부터 데이터 수신 성공");
                this.setState({
                    drugs: res.data
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

    setModalVisible = (index) => {
        this.setState({modalIndex: index});
    }

    renderDrugDetail = (drugDetail) => {
        if(drugDetail[0] && typeof drugDetail[0].medicalType !== 'undefined') {
            // 얘내가 서버로부터 받아온 오늘 먹은 약
            return drugDetail.map((data, index) => {
                return (
                    <View style={styles.drugDetailStyle} key={index + data.drug.drugName}>
                        <Modal
                            animationType="fade"
                            visible={index+data.drug.drugName === this.state.modalIndex}
                            onRequestClose={() => {alert("Modal has been closed.")}}
                            presentationStyle={'fullScreen'}
                        >
                            <View style={styles.modalContainerStyle}>
                                <TouchableOpacity onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                <View>
                                    <Image resizeMode='stretch' source={{uri: data.drug.drugImageUrl}} style={styles.modalDrugImageStyle} />
                                    <Text style={styles.modalDrugNameStyle}>{data.drug.drugName}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>업체명 : {data.drug.drugCompany}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>수입(제조) 구분 : {data.drug.drugCompanyInfo}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>보험코드 : {data.drug.insuranceCode}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>성상 : {data.drug.drugShape}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>성분 : {data.drug.drugIngrident}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>보관 : {data.drug.drugSave}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>효능효과 : {data.drug.drugEffect}</Text>
                                    <Text style={styles.modalDrugDetailStyle}>용법용량 : {data.drug.drugAmount}</Text>
                                </View>
                                </TouchableOpacity>
            
                            </View>
                        </Modal>
        
                        <TouchableOpacity onPress={() => this.setModalVisible(index + data.drug.drugName)}>
                            <View key={index + data.drug.drugName} >
                                <Image source={{uri: data.drug.drugImageUrl}} style={styles.drugImageStyle} />
                                <Text style={styles.drugDescription}>{data.drug.drugName}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
        
        return drugDetail.map((data, index) => {
            return (
                <View style={styles.drugDetailStyle} key={index}>
                    <Modal
                        animationType="fade"
                        visible={index+data.drugName === this.state.modalIndex}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        presentationStyle={'fullScreen'}
                    >
                        <View style={styles.modalContainerStyle}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                            <View>
                                <Image resizeMode='stretch' source={{uri: data.drugImageUrl}} style={styles.modalDrugImageStyle} />
                                <Text style={styles.modalDrugNameStyle}>{data.drugName}</Text>
                                <Text style={styles.modalDrugDetailStyle}>업체명 : {data.drugCompany}</Text>
                                <Text style={styles.modalDrugDetailStyle}>수입(제조) 구분 : {data.drugCompanyInfo}</Text>
                                <Text style={styles.modalDrugDetailStyle}>보험코드 : {data.insuranceCode}</Text>
                                <Text style={styles.modalDrugDetailStyle}>성상 : {data.drugShape}</Text>
                                <Text style={styles.modalDrugDetailStyle}>성분 : {data.drugIngrident}</Text>
                                <Text style={styles.modalDrugDetailStyle}>보관 : {data.drugSave}</Text>
                                <Text style={styles.modalDrugDetailStyle}>효능효과 : {data.drugEffect}</Text>
                                <Text style={styles.modalDrugDetailStyle}>용법용량 : {data.drugAmount}</Text>
                            </View>
                            </TouchableOpacity>
        
                        </View>
                    </Modal>
      
                    <TouchableOpacity onPress={() => this.setModalVisible(index + data.drugName)}>
                        <View key={index + data.drugName} >
                            <Image source={{uri: data.drugImageUrl}} style={styles.drugImageStyle} />
                            <Text style={styles.drugDescription}>{data.drugName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                
            );
        });
    }

    renderDrugList = ({item}) => {
        return (
            <View style={styles.listContainer} key={item.key}>
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
                key: '오늘',
                drugs: this.state.drugs
            },
            {
                key: '어제',
                drugs: [
                    {
                        drugName: "하루날디정0.2mg",
                        drugCompany: "한국아스텔라스제약",
                        drugCompanyInfo: "수입",
                        insuranceCode: "677200160",
                        drugShape: "이 약은 흰색의 원형정제이다.",
                        drugIngrident: "탐스로신염산염 0.2mg",
                        drugSave: "기밀용기, 실온(1-30도)보관",
                        drugEffect: "양성 전립샘비대증에 따른 배뇨장애 개선",
                        drugAmount: "성인 탐스로신염산염 0.2mg을 1일 1회 식후에 경구 투여한다. 증상에 따라 적절히 증강한다.",
                        drugImageUrl: "http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F3323_000_2%2F20160623181704506_WLY3V4VKG.jpg%2FA11AOOOOO977601.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN%22&twidth=780&theight=426&opts=17"
                    },
                    {
                        drugName: "써스펜이알서방정",
                        drugCompany: "한미약품",
                        drugCompanyInfo: "수입",
                        insuranceCode: "643501510",
                        drugShape: "이 약은 백색의 장방형 필름코팅정제이다.",
                        drugIngrident: "아세트아미노펜제피세립 650mg",
                        drugSave: "밀폐용기, 실온(1~30도)보관",
                        drugEffect: "해열 및 감기에 의한 통증과 두통, 치통, 근육통, 허리통증, 생리통, 관절통의 완화",
                        drugAmount: "12세 이상의 소아 및 성인: 매 8시간마다 2정씩 복용. 24시간 동안 6정을 초과하지 말 것.",
                        drugImageUrl: "http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F3323_000_2%2F20160623175638965_ATPD6B56C.jpg%2FA11AOOOOO113601.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN%22&twidth=780&theight=426&opts=17"
                    },
                    {
                        drugName: "스티렌정" ,
                        drugCompany: "동아에스티" ,
                        drugCompanyInfo: "제조" ,
                        insuranceCode: "642502290" ,
                        drugShape: "이 약은 녹색의 타원형 필름코팅정이다." ,
                        drugIngrident: "애엽95% 에탄올연조엑스(20->1) 60mg" ,
                        drugSave: "기밀용기, 실온(1~30도)보관" ,
                        drugEffect: "다음 질환의 위점막 병변(미란(짓무름), 출혈, 발적, 부종) 개선: 급성위염, 만성위염",
                        drugAmount: "1회 60mg을 1일 3회 경구투여한다." ,
                        drugImageUrl: "http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F3323_000_2%2F20160623180840471_M09X0T4N6.jpg%2FA11AOOOOO570201.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN%22&twidth=780&theight=426&opts=17"
                    }
                ]
            },
            {
                key: '그저께',
                drugs: [
                    {
                        drugName: '오구멘틴정',
                        drugCompany: "일성신약",
                        drugCompanyInfo: "제조",
                        insuranceCode: "655401500",
                        drugShape: "백색이거나 거의 백색 타원형의 필름 코팅정제이다.",
                        drugIngrident: "아목시실린나트륨 250mg, 클라불란산칼륨 125mg",
                        drugSave: "1~25℃, 기밀용기(방습포장), 건소보관",
                        drugEffect: "급.만성 기관지염, 대엽성 및 기관지 폐렴, 농흉, 폐농양, 편도염, 부비동염, 중이염- 방광염, 요도염, 신우신염 - 골반감염, 임질 - 종기 및 농양, 연조직염, 상처감염",
                        drugAmount: "아목시실린의 양으로서 1회 250～500mg을 12시간마다 경구투여한다.",
                        drugImageUrl: "http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F3323_000_2%2F20160623170315435_IF23OTA2X.jpg%2FA11A1130A018301.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN%22&twidth=780&theight=426&opts=17"
                    },
                    {
                        drugName: '훼라민큐정',
                        drugCompany: "동국제약",
                        drugCompanyInfo: "제조",
                        insuranceCode: "A00701771",
                        drugShape: "분홍색의원형필름코팅정제",
                        drugIngrident: "세인트존스워트80%메탄올엑스 84mg, 서양승마추출액 0.0364mL",
                        drugSave: "기밀용기, 실온(1 ~ 30℃)보관",
                        drugEffect: "갱년기 증상의 완화",
                        drugAmount: "성인 1회 1정 1일 2회, 필요시 1회 2정 1일 2회 복용할 것.",
                        drugImageUrl: "http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F3323_000_2%2F20160623172310806_JD9Y895YL.jpg%2FA11ADDDDD010604.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN%22&twidth=780&theight=426&opts=17"
                    }
                ]
            }
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
                margin: 10
            },
                drugImageStyle: {
                    width: 250,
                    height: 140
                },
                drugDescription: {
                    padding: 10,
                    paddingBottom: 0,
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
                    fontWeight: 'bold',
                    margin: 20
                },
                modalDrugDetailStyle: {
                    margin: 5
                }
})

export default DrugScreen;