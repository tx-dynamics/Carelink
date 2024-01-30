import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import ServiceListingComp from '../../../../components/ServiceListingComp';
import { heightPixel, widthPixel } from '../../../../Constants';
import { appIcons } from '../../../../Constants/Utilities/assets';
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';


const ServiceRooms = ({ navigation }) => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            adress: "Brookside Place",
            label: "Debit/Credit Card",
            description: `You will get 20 listing to post in a month with this monthly plan`,
            pic: appIcons.dummyPic1,
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"
                },
                {
                    id: 2,
                    title: "Car parking available"
                },
                {
                    id: 3,
                    title: "Tarrece"
                },
            ]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
            price: "$20.99",
            plans: "/month",
            label: "Debit/Credit Card",
            adress: "Hillcrest Heights",
            description: `You will get 20 listing to post in a month with this monthly plan`,
            pic: appIcons.dummyPic2,
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
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "PayPal",
            adress: "Magnolia Meadows",
            description: `You will get 20 listing to post in a month with this monthly plan`,
            pic: appIcons.dummyPic3,
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"
                },

            ]
        },
    ];
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <Header height={heightPixel(80)} leftImgStyle={styles.leftImgStyle} rightImg={appIcons.thirdTab}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ScrollView>
                <View style={styles.marginView}>
                    <View style={styles.direcView}>
                        <Apptext style={styles.rms} >Rooms Details</Apptext>
                    </View>
                    <Apptext style={[styles.rms, { marginTop: wp('6%') }]} >Available (3)</Apptext>
                    <View style={{ marginTop: wp('5%'), }}>
                        <FlatList ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ServiceListingComp disabled facilityData={item.facility}
                                    // facilty={item.facility} 
                                    pic={item.pic}
                                    showProposals={true}
                                    labelValue={item.adress}
                                    name={"ABC Rental Agency"}
                                    location={"7+ Year Experience"}
                                    when={"Right Now"}
                                    fors={"For 20 days"}
                                    hourly={"$20-70 Hourly"}
                                // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
                                />
                            )}
                        />
                    </View>
                    <Apptext style={styles.rms} >Booked (3)</Apptext>
                    <View style={{ marginTop: wp('5%') }}>
                        <FlatList ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ServiceListingComp
                                    pic={item.pic}
                                    facilityData={item.facility}
                                    showProposals={true}
                                    labelValue={item.adress}
                                    name={"James Clear"}
                                    location={"7+ Year Experience"}
                                    when={"Right Now"}
                                    fors={"For 20 days"}
                                    hourly={"$20-70 Hourly"}

                                />
                            )}
                        />
                    </View>
                    {/* <Apptext style={styles.rms} >Posted (2)</Apptext> */}
                    {/* <View style={{ marginTop: wp('5%') }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ServiceListingComp
                                    labelValue={"3 Room on 2nd Floor"}
                                    when={"Right Now"}
                                    fors={"For 20 days"}
                                    hourly={"$20-70 Hourly"}
                                />
                            )}
                        />
                    </View> */}
                </View>
            </ScrollView>
        </View>
    )
}

export default ServiceRooms;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'), marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
    marginView: {
        paddingHorizontal: wp('4.4%'),
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    searchBar: {
        height: 47,
        width: wp('90%'),
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 9,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray"

    },
    direcView: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },

});