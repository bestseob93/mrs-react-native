import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#b5d0fc',
    },
    inputWrapper: {
        paddingHorizontal: 50,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    errMessage: {
        paddingTop: 10,
        color: '#ff8832'
    },
    textWrapper: {
        marginTop: 5,
        paddingHorizontal: 50,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    textStyle: {
        color: '#959595',
        textDecorationLine: 'underline',
    }
})