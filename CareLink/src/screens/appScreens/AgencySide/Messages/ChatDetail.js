import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import ChatDetailComp from '../../../../components/ChatDetailComp';
import { heightPixel, routes } from '../../../../Constants';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';

const ChatDetail = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "+5",
            label: "James Clear",
            msg: "Hi Jackson, can you tell …",
            Img: require("../../../../../assets/JC.png"),
            dt: "5 minutes ago",
            move: "Detail"
        },
    ];


    return (
        <AppGLobalView style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate(routes.createContract)}
                style={styles.scView}  >
                <Apptext style={styles.dtls} >Make contract</Apptext>
            </TouchableOpacity>
            <View style={styles.direcView} >
                <Image
                    style={styles.jcImg}
                    source={require('../../../../../assets/JC.png')} />
                <Apptext style={styles.rms} >James Clear</Apptext>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: wp('5%') }} >
                    <View style={styles.PicMainView}>
                        <View style={styles.msgView}>
                            <Apptext style={styles.msgTxt} >Lorum ipsum dolor emet </Apptext>
                        </View>
                        <Apptext style={styles.timeTxt} >04:30 PM</Apptext>
                    </View>
                    <View style={{ marginVertical: wp('5%') }}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={DATA}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={() => {
                                return (
                                    <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                                        No Item Found
                                    </Apptext>
                                );
                            }}
                            renderItem={({ item, index }) => (
                                <ChatDetailComp
                                    msg={"Lorum ipsum dolor emet"}
                                />

                            )}
                        />
                    </View>

                    <View style={[styles.PicMainView, { marginTop: -10 }]}>
                        <View style={styles.msgView}>
                            <Apptext style={styles.msgTxt} >Lorum ipsum dolor emet </Apptext>
                        </View>
                        <Apptext style={styles.timeTxt} >04:30 PM</Apptext>
                    </View>
                    <View style={{ marginVertical: wp('5%') }}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={DATA}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={() => {
                                return (
                                    <Apptext style={styles.noItem}>
                                        No Item Found
                                    </Apptext>
                                );
                            }}
                            renderItem={({ item, index }) => (
                                <ChatDetailComp
                                    msg={"Lorum ipsum dolor emet"}
                                />

                            )}
                        />
                    </View>
                    <View style={[styles.PicMainView, { marginTop: -10 }]}>

                        <View style={styles.msgView}>
                            <Apptext style={styles.msgTxt} >Lorum ipsum dolor emet </Apptext>
                        </View>
                        <Apptext style={styles.timeTxt} >04:30 PM</Apptext>

                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                style={styles.kbView}>
                <View style={styles.ChatMsgView} >
                    <TextInput
                        onChangeText={(val) => console.log(val)}
                        placeholder="Type a message"
                        placeholderTextColor={DefaultStyles.colors.lightgray}
                        style={{
                            height: wp('14%'),
                            paddingLeft: wp('5%')
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.ChatSndMsgBtn}>
                    <Image source={require('../../../../../assets/sendBtn.png')} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </AppGLobalView>
    )
}

export default ChatDetail;


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
        marginTop: wp('15%'),
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
        marginBottom: wp('2%'),

        marginHorizontal: wp('45%')
    },
    msgView: {
        width: wp('50%'),
        borderRadius: 13,
        backgroundColor: "#e5e5e5",
        padding: 10,
        borderRadius: 60,
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
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: DefaultStyles.colors.black
    },
    timeTxt: {
        width: wp('20%'),
        fontSize: 11,
        color: DefaultStyles.colors.lightPrimary,
        marginTop: heightPixel(10),
        marginHorizontal: wp('2%')
    },
    ChatMsgView: {
        flexDirection: 'row',
        height: wp('12%'),
        marginTop: wp('4%'),
        justifyContent: 'space-between',
        width: wp('75%'),
        alignItems: 'center',
        backgroundColor: "#e5e5e5",
        borderRadius: 23,
        marginHorizontal: '5%',
        alignSelf: 'center',
        marginBottom: 10
    },
    ChatSndMsgBtn: {
        width: 45, height: 45,
        borderRadius: 40,
        marginLeft: -5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DefaultStyles.colors.primary
    },
    dtls: {
        color: DefaultStyles.colors.primary,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    scView: {
        width: wp('40%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: wp('60%'),
        marginTop: -55
    },
    direcView: {
        flexDirection: 'row', marginHorizontal: wp('7%')
    },
    jcImg: {
        width: 61, height: 61, marginTop: wp('10%')
    },
    noItem: {
        alignSelf: "center", marginTop: 50
    },
    kbView: {
        width: '100%', flexDirection: 'row', alignItems: 'center',
        borderTopColor: '#F5F5F5', borderTopWidth: 1
    }

});