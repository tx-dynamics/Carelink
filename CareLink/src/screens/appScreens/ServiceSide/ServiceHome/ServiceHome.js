import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import ServiceRoomComp from '../../../../components/ServiceRoomComp';
import ProposalComp from '../../../../components/ProposalComp';
import ReportComp from '../../../../components/ReportComp';
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { fontPixel, heightPixel, widthPixel, fonts, routes } from '../../../../Constants';
import colors from '../../../../config/colors';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
const ServiceHome = ({ }) => {
    const DATA = [
        {
            name: "ABC Rental Agency",
            adress: "Oakwood Heights",
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            no: "3",
            no1: "3",
            label: "Rooms",
            msg: "Available",
            width: wp('33%'),
            msg1: "Booked",
            desc: `3 hr ago`,
            route: routes.availableList
        },
        {
            name: "Pearl Villa Estate",
            adress: "Meadowbrook Meadows",
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            no: "3",
            no1: "9",
            label: "Proposals",
            msg: "Booked",
            width: wp('53%'),
            msg1: "Submitted",
            desc: `3 hr ago`,
            route: routes.bookedList
        },
        {
            name: "Eastern Street Rent",
            adress: "Willowbrook Terrace",
            id: 'bd7a42cbea-c1b1-46c2-aed5-3ad53abb28ba',
            no: "6",
            no1: "3",
            label: "Rooms",
            msg: "Listed",
            width: wp('53%'),
            msg1: "Booked",
            desc: `3 hr ago`,
            route: routes.listedList
        },
        {
            name: "Eastern Street Rent",
            adress: "Willowbrook Terrace",
            id: 'bd7a42cbea-c1b1-46c2-aed5-3ad53abb28ba',
            no: "6",
            no1: "3",
            label: "Rooms",
            msg: "Inactive",
            width: wp('53%'),
            msg1: "Booked",
            desc: `3 hr ago`,
            inactive: true,
            route: routes.inactiveList
        },
    ];
    const navigation = useNavigation()
    return (
        <AppGLobalView style={styles.container}>
            <AppStatusbar />
            <Header headerLabel={"Home"}
                rightImgStyle={styles.rightImgStyle}
                // height={heightPixel(80)} 
                leftImgStyle={styles.leftImgStyle} rightImg={appIcons.thirdTab}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.txtView}>
                    <Text style={styles.welcomeText} >Welcome</Text>
                    <Apptext style={styles.rms} >James Clear</Apptext>
                </View>
                <View style={styles.whiteBox}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={styles.imgView}>
                            <Image resizeMode='contain' style={{ marginTop: heightPixel(11), width: widthPixel(66), height: heightPixel(140) }} source={require('../../../../../assets/blueMbl.png')} />
                        </View>
                        <Apptext style={styles.listingTxt}>
                            Start listing your extra home with an agency and make money
                        </Apptext>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.listingOptions })} style={styles.lilBtn} >
                        <Apptext style={styles.BtnTxt} >Start Listing</Apptext>
                    </TouchableOpacity>
                </View>
                <View style={[styles.txtView, { marginTop: heightPixel(40) }]}>
                    <Apptext style={styles.rms} >Rooms</Apptext>
                    <TouchableOpacity onPress={() => navigation.navigate("SearchNavigator", { screen: "ServiceRooms" })}>
                        {/* <Apptext style={styles.dtls} >See Details</Apptext> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.marginView} >
                    <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} style={{ alignSelf: "center" }}
                        data={DATA}
                        horizontal
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <ServiceRoomComp onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: item.route })}
                                labelValue={item.label}
                                AvailableRooms={item.no}
                                firstTxt={item.msg}
                                circleStyle={{ backgroundColor: item.inactive ? colors.messageBody : colors.white }}
                                textStyle={{ color: item.inactive ? colors.white : colors.black }}
                            />
                        )}
                    />
                    <View style={styles.direcView}>
                        <Apptext style={styles.rms} >Received Proposals</Apptext>
                    </View>
                    <View style={{ marginTop: heightPixel(21) }}>
                        <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ProposalComp onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
                                    showProposals={true}
                                    name={item.name}
                                    location={item.adress}
                                    description={item.desc}
                                    img={item.img}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </AppGLobalView>
    )
}

export default ServiceHome;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        zIndex: 999
    },
    whiteBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('5%'),
        backgroundColor: "white",
        height: wp('51%'),
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('30%')
    },
    listingTxt: {
        width: wp('55%'),
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: DefaultStyles.colors.black,
        fontWeight:'400'
    },
    lilBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPixel(103),
        height: heightPixel(35),
        marginTop: -20,
        marginLeft: wp('5%'),
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 30
    },
    BtnTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: DefaultStyles.colors.white
    },
    welcomeText: {
        fontSize: fontPixel(16),
        fontFamily: 'Poppins-Regular',
        color: colors.welcomeText
    },
    txtView: {
        alignItems: 'flex-start',
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    rms2: {
        fontFamily: 'Poppins-SemiBold',
        marginHorizontal: -13, fontSize: 20

    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
    marginView: {
        marginTop: wp('6%')
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    direcView: {
        paddingHorizontal: widthPixel(20),
        flexDirection: 'row',
        marginTop: wp('5%'),
        justifyContent: 'space-between'
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
    rightImgStyle: {
        width: widthPixel(32),
        height: widthPixel(32),
    },
});