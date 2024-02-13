import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View, StatusBar
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import ChatDetailComp from '../../../../components/ChatDetailComp';
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';
import { heightPixel, widthPixel } from '../../../../Constants';
import colors from '../../../../config/colors';
import SendMessageComponent from '../../../../components/SendMessageComponent/SendMessageComponent';

const ServiceChatDetail = ({ navigation, route }) => {
    const ref = useRef(null)
    const [isMessage, setMessage] = useState("")
    const [DATA, setData] = useState([
        {
            id: 1,
            user: 1,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 2,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 3,
            user: 1,
            title: "try this testing chat"
        },
        {
            id: 4,
            user: 1,
            title: "again testing with long message Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor."
        },
        {
            id: 40,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 5,
            user: 1,
            title: "Lorum ipsum dolor emet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor."
        },
        {
            id: 6,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 7,
            user: 1,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 8,
            user: 1,
            title: "Lorum ipsum dolor emet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. "
        },
        {
            id: 9,
            user: 2,
            title: "Lol"
        },
        {
            id: 10,
            user: 1,
            title: "Lorum ipsum dolor emet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor."
        },
        {
            id: 11,
            user: 1,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 12,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 13,
            user: 2,
            title: "Lorum ipsum dolor emet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod"
        },
        {
            id: 14,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 15,
            user: 1,
            title: "Lorum ipsum  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcudolor emet"
        },
        {
            id: 16,
            user: 2,
            title: "Lorum ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor. dolor emet"
        },
        {
            id: 17,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 18,
            user: 1,
            title: "Lorum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.ipsum dolor emet"
        },
        {
            id: 19,
            user: 1,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 20,
            user: 2,
            title: "Lorum ipsum dolor emet"
        },
        {
            id: 21,
            user: 2,
            title: "Lorum iLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.psum dolor emet"
        },



    ]);
    const statusbarAction = () => {
        StatusBar.setTranslucent(false)
    }
    const onSend = () => {
        let temp = [...DATA]
        temp.unshift({
            id: temp.length + 1,
            user: 1,
            title: isMessage,
        })
        setData(temp)
        ref.current.scrollToIndex({ animated: false, index: 0 });
        setMessage("")
    }
    useEffect(() => {
        statusbarAction()
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar translucent={false} backgroundColor={colors.white} />
            {/* <AppStatusbar /> */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: widthPixel(20)
            }}>
                <Header headerLabel={"Chat"} height={heightPixel(80)} style={{ width: widthPixel(70) }}
                    leftImgName={require('../../../../../assets/headerBack.png')}
                    onPressLeft={() => navigation.goBack()}
                />
                {route?.params?.isContract &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Received")}
                        style={styles.RcvdView}>
                        <Apptext style={styles.cntTxt}>Contracts</Apptext>
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.direView} >
                <Image
                    style={styles.imgStl}
                    source={require('../../../../../assets/inbox.png')} />
                <Apptext style={styles.rms} >James Clear</Apptext>
            </View>
            <View style={{ marginTop: wp('5%'), flex: 1, }} >
                <FlatList inverted ref={ref}
                    // initialScrollIndex={DATA.length - 1} 
                    keyExtractor={(item, index) => item.id}
                    // ItemSeparatorComponent={() => <View style={{ marginBottom: heightPixel(7) }}></View>}
                    data={DATA}
                    renderItem={({ item, index }) => item?.user == 1 ? <MyMessage msg={item.title} /> : <ChatDetailComp msg={item.title} />} />
            </View>
            <SendMessageComponent disabled={isMessage == "" ? true : false} onChangeText={setMessage} value={isMessage} onPress={onSend} />
        </View>
    )
}
const MyMessage = React.memo(({ msg }) => {
    return (
        <View style={styles.PicMainView}>
            <View style={styles.msgView}>
                <Apptext style={styles.msgTxt} >{msg}</Apptext>
            </View>
            <Apptext style={styles.timeTxt} >04:30 PM</Apptext>
        </View>
    )
})
export default ServiceChatDetail;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'), marginHorizontal: wp('5%')
    },
    marginView: {
        alignSelf: 'center'
    },
    rms: {
        // marginTop: wp('10%'),
        marginLeft: wp('2%'),
        fontFamily: 'Poppins-Regular',
        fontSize: 19,
    },
    labelTxt: {

        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginTop: wp('1%'),
        marginHorizontal: wp('3%')
    },
    PicMainView: {
        alignSelf: "flex-end",
        marginRight: widthPixel(15),
        marginBottom: heightPixel(10),
    },
    msgView: {
        maxWidth: widthPixel(330),
        borderRadius: widthPixel(30),
        paddingVertical: heightPixel(10),
        paddingHorizontal: widthPixel(20),
        backgroundColor: "#e5e5e5",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    msgTxt: {
        textAlign: "left",
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: DefaultStyles.colors.black
    },
    timeTxt: {
        width: wp('20%'),
        fontSize: 11,
        color: DefaultStyles.colors.lightPrimary,
        marginTop: wp('1%'),
        marginHorizontal: wp('2%')
    },

    ChatSndMsgBtn: {
        width: 45, height: 45,
        borderRadius: 40,
        marginLeft: -5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DefaultStyles.colors.primary
    },
    RcvdView: {
        height: heightPixel(23),
        width: wp('25%'),
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 5,
    },
    cntTxt: {
        fontSize: 12, color: DefaultStyles.colors.white, textAlign: 'center'
    },
    direView: {
        alignItems: "center",
        flexDirection: 'row',
        marginHorizontal: wp('7%')
    },
    imgStl: {
        width: widthPixel(63),
        height: widthPixel(63),
        borderRadius: widthPixel(40)
    },



});