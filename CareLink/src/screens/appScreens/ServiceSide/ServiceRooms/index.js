import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import ServiceListingComp from '../../../../components/ServiceListingComp';


const ServiceRooms = ({ navigation }) => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "Debit/Credit Card",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "PayPal",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];
    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ScrollView>
                <View style={styles.marginView}>
                    <View style={styles.direcView}>
                        <Apptext style={styles.rms} >Rooms Details</Apptext>
                    </View>
                    <Apptext style={[styles.rms, { marginTop: wp('6%') }]} >Available (3)</Apptext>
                    <View style={{ marginTop: wp('5%') }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ServiceListingComp
                                    showProposals={true}
                                    labelValue={"3 Room on 2nd Floor"}
                                    name={"ABC Rental Agency"}
                                    location={"7+ Year Experience"}
                                    when={"Right Now"}
                                    fors={"For 20 days"}
                                    hourly={"$20-70 Hourly"}
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
                                />
                            )}
                        />
                    </View>
                    <Apptext style={styles.rms} >Booked (3)</Apptext>
                    <View style={{ marginTop: wp('5%') }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ServiceListingComp
                                    showProposals={true}
                                    labelValue={"3 Room on 2nd Floor"}
                                    name={"James Clear"}
                                    location={"7+ Year Experience"}
                                    when={"Right Now"}
                                    fors={"For 20 days"}
                                    hourly={"$20-70 Hourly"}

                                />
                            )}
                        />
                    </View>
                    <Apptext style={styles.rms} >Posted (2)</Apptext>
                    <View style={{ marginTop: wp('5%') }}>
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
                    </View>
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
        marginHorizontal: wp('5%'),
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
    direcView:{
        flexDirection: 'row', justifyContent: 'space-between'
    }


});