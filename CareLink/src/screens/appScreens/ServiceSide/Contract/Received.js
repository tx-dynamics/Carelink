import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import SelectBox from '../../../../components/SelectBox';


const Received = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "+5",
            label: "General Contract",
            msg: "Hi Jackson, can you tell …",
            Img: require("../../../../../assets/JC.png"),
            dt: "5 minutes ago",
            move: "Detail"
        },



    ];


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()}
                style={{width:61,marginLeft:wp('2%'), height:61, marginTop:-5}} 
            />
              <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Received Contracts</Apptext>
                   
                </View>
            <ScrollView>

                <View style={{ marginTop: wp('10%') }} >

                        <FlatList
                            data={DATA}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={() => {
                                return (
                                    <Apptext style={{ alignSelf: "center", marginTop: 50 }}>
                                        No Item Found
                                    </Apptext>
                                );
                            }}
                            renderItem={({ item, index }) => (
                                <SelectBox
                                leftTitle={item.label}
                                circle={false}
                            />

                            )}
                        />
                    </View>
                    
            </ScrollView>
         
        </View>
    )
}

export default Received;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('2%'), marginHorizontal: wp('5%')
    },
    marginView:{
        alignSelf:'center'
    },
    rms: {
        
        marginLeft:wp('2%'),
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
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
        color: '#edcfab',
        marginTop: wp('1%'),
        marginHorizontal: wp('2%')
        // backgroundColor:"red"
    },
    ChatMsgView: {
        flexDirection: 'row',
        height: wp('12%'),
        marginTop: wp('4%'),
        justifyContent: 'space-between',
        width: wp('75%'),
        alignItems: 'center',
        // position: "absolute",
        // bottom: 0,
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


});