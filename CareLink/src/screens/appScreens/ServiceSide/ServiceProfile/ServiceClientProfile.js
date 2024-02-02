import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import SelectBox from '../../../../components/SelectBox';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { appIcons } from '../../../../Constants/Utilities/assets';
import { heightPixel, routes, widthPixel } from '../../../../Constants';
import NewSelectBox from '../../../../components/NewSelectBox/NewSelectBox';

const ServiceClientProfile = ({ navigation }) => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "6",
            forward: false,
            title: "Available Rooms",
            route: routes.availableList,
        },
        {
            id: 'bd7acbea-c1b1-4qds6c2-aed5-3ad53abb28ba',
            count: "11",
            forward: false,
            title: "Booked Rooms",
            route: routes.bookedList,
        },
        {
            id: 'bd7acbea-c1b1-46c2123-aed5-3ad53abb28ba',
            forward: true,
            title: "Certificates",
            route: routes.userCertificateList,
        },

    ];
    return (
        <View style={styles.container}>
            <Header isBack headerLabel={"Profile"} height={heightPixel(80)} leftImgStyle={styles.leftImgStyle} rightImg={appIcons.thirdTab}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ScrollView>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Profile</Apptext>
                    <TouchableOpacity disabled
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "EditProfile" })}>
                        <Apptext style={styles.dtls} >Edit</Apptext>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.imgView} >
                    <Image style={styles.imgStl}
                        source={appIcons.dummyProfile} />
                </TouchableOpacity>
                <View style={{ alignSelf: 'center' }} >
                    <Apptext style={styles.jmsTxt} >James Clear</Apptext>
                    <Apptext style={styles.dcTxt} >Washington, DC</Apptext>
                </View>
                <View style={styles.pinkBox}>
                    <Apptext style={styles.mmbrTxt} >Member since October 2021</Apptext>
                    {/* <Apptext style={styles.mmbrTxt} >Hired 0 providers</Apptext> */}
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Apptext style={styles.acntTxt}>List a room</Apptext>
                </TouchableOpacity>
                <FlatList
                    data={DATA}
                    ListHeaderComponent={() => <View style={{ marginTop: heightPixel(2) }}></View>}
                    renderItem={({ item, index }) =>
                        <NewSelectBox
                            title={item.title}
                            count={item.count}
                            forward={item.forward}
                            onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: item.route })}
                        />} />

                {/* <View style={{ marginTop: wp('3%') }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <SelectBox
                                leftTitle={item.label}
                                count={item.count}
                                backgroundColor={item.color}
                                isDesc={item.chk}
                                bg={item.bgClr}
                                txtClr={item.txtClr}
                                circle={item.circle}
                                description={item.description}
                            />
                        )}
                    />
                </View> */}
            </ScrollView>
        </View>
    )
}

export default ServiceClientProfile;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    imgView: {
        width: wp('30%'),
        marginTop: wp('7%'),
        height: wp('30%'),
        alignSelf: 'center',

    },
    upldTxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop: wp('3%'),
        color: "#407fb9"
    },
    jmsTxt: {
        marginTop: wp('4%'),
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'

    },
    dcTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        alignSelf: 'center'
    },
    pinkBox: {
        width: 200,
        borderRadius: 10,
        backgroundColor: DefaultStyles.colors.lightPrimary,
        alignSelf: 'center',
        marginTop: wp('3%')
    },
    mmbrTxt: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: wp('1%')
    },
    btn: {
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 30,
        width: 103,
        alignSelf: 'center',
        padding: 5,
        marginVertical: heightPixel(20),

    },
    acntTxt: {
        top: heightPixel(1),
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        alignSelf: 'center',
        color: DefaultStyles.colors.white,
    }
    ,
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: wp('1%'),
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    dtls: {
        color: DefaultStyles.colors.black,
        textDecorationLine: 'underline',
    },
    imgStl: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: 60,
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
});