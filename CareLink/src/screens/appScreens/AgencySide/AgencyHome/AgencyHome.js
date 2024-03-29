import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import AgencyHomeComp from '../../../../components/AgencyHomeComp';
import FvrtComp from '../../../../components/FvrtComp';
import LatestListingsComp from '../../../../components/LatestListingsComp';
import { DrawerActions, useNavigation } from '@react-navigation/native'


const AgencyHome = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            no: "3",
            no1: "3",
            label: "Rooms",
            msg: "Available",
            msg1: "Booked",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            no: "6",
            no1: "9",
            label: "Proposals",
            msg: "Accepted",
            msg1: "Submitted",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];
    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                rightImg={require('../../../../../assets/sendIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: "Messages" })}
                headerLabel={"Home"}
            />
            <ScrollView>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Rooms & Proposals</Apptext>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "RoomsProposals" })}>
                        <Apptext style={styles.dtls} >See Details</Apptext>
                    </TouchableOpacity>
                </View>
                <View style={styles.marginView} >
                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <AgencyHomeComp
                                labelValue={item.label}
                                AvailableRooms={item.no}
                                BookedRooms={item.no1}
                                firstTxt={item.msg}
                                scndTxt={item.msg1}
                            />
                        )}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Apptext style={styles.rms} >Latest Listings</Apptext>
                        <Apptext style={styles.dtls} >See All</Apptext>
                    </View>
                    <View style={{ marginTop: 21 }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <LatestListingsComp
                                    labelValue={"3 Room on 2nd Floor"}
                                    when={"Right Now"}
                                    fors={"For 20 days"}
                                    hourly={"$20 - 70 Hourly"}

                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AgencyHome;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        zIndex: 999
    },
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: wp('3%'),
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-Medium', fontSize: 20
    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
    marginView: {
        marginHorizontal: wp('5%'),
        marginTop: wp('6%')
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    }



});