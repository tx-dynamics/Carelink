import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, View, UIManager, LayoutAnimation } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import AgencyHomeComp from '../../../../components/AgencyHomeComp';
import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';
import { heightPixel, routes, widthPixel } from '../../../../Constants';
import { appIcons } from '../../../../Constants/Utilities/assets';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';

export const agencyData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5sdqwe-3ad53abb28ba',
        adress: "Brookside Place",
        duation: 20,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },
            {
                id: 2,
                title: "Car parking available"
            },
        ]
    },
    {
        id: 'bd7acbea-c1b1qweqw23e-46c2-aed5-3ad53abb28b1',
        duation: 3,
        adress: "Hillcrest Heights",
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },
            {
                id: 2,
                title: "Car parking available"
            },
        ]
    },

    {
        id: 'bd7ac4bea-c1b1-46c2-aed5-3567567ad53abb28ba',
        duation: 14,
        adress: "Magnolia Meadows",
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },

        ]
    },
    {
        id: 'bd7ac4bea-c1b1-46c2-aed5-3ad32ddd53abb28ba',
        duation: 29,
        adress: "Magnolia Meadows",
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },

        ]
    },
];
const AgencyHome = ({ }) => {
    const navigation = useNavigation()
    return (
        <AppGLobalView style={styles.container}>
            <AppStatusbar />
            <Header
                headerLabel={"Home"}
                rightImg={appIcons.messageIcon}
                leftImgStyle={styles.leftImgStyle}
                rightImgStyle={styles.rightImgStyle}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.messages })}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Rooms & Proposals</Apptext>
                </View>
                <AgencyHomeComp onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.bookedRoomAgency })}
                    labelValue={"Rooms"}
                    BookedRooms={"7"}
                    scndTxt={"Booked"}
                />
                <AgencyHomeComp
                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.agencyProposalList })}
                    labelValue={"Proposals"}
                    BookedRooms={"4"}
                    scndTxt={"Submitted"}
                    AvailableRooms={"3"}
                    firstTxt={"Accepted"}
                />
                <View style={styles.listingView}>
                    <Apptext style={styles.rms} >Customer Listings</Apptext>
                    <TouchableOpacity onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.customerListing })}>
                        <Apptext style={styles.dtls} >See All</Apptext>
                    </TouchableOpacity>
                </View>
                <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false}
                    // ListFooterComponent={() => <View style={{ marginBottom: heightPixel(80) }}></View>}
                    data={agencyData}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => <CustomerListingComp
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.roomDetails })}
                        title={item.adress}
                        duration={item.duation}
                        facilityData={item.facility} />} />
            </ScrollView>
        </AppGLobalView>
    )
}

export default AgencyHome;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        zIndex: 999
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
    rightImgStyle: {
        width: widthPixel(32),
        height: widthPixel(32),
    },
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: wp('3%'),
        marginHorizontal: wp('5%')
    },
    listingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: widthPixel(20),
        marginVertical: heightPixel(10)
    },
    rms: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20
    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
});