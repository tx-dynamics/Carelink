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


const RoomsProposals = ({ navigation }) => {

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
                leftImgName={require('../../../../../assets/headerBack.png')}
                rightImg={require('../../../../../assets/sendIcon.png')}
                onPressLeft={() => navigation.goBack()}
                onPressRight={() => navigation.navigate("Messages")}
                headerLabel={"Rooms & Proposals"}
            />
            <ScrollView>

                <View style={styles.marginView} >
                    <Apptext style={styles.rms} >Available (3)</Apptext>
                    <View style={{ marginTop: wp('5%') }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <LatestListingsComp
                                    showProposals={true}
                                    labelValue={"3 Room on 2nd Floor"}
                                    name={"James Clear"}
                                    location={"Location : abc Town , Washington, DC"}
                                    onPress={() => navigation.navigate("RoomsDetails")}
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
                                <LatestListingsComp
                                    showProposals={true}
                                    labelValue={"3 Room on 2nd Floor"}
                                    name={"James Clear"}
                                    location={"Location : abc Town , Washington, DC"}

                                />
                            )}
                        />
                    </View>
                    <Apptext style={styles.rms} >Submited Proposal (2)</Apptext>
                    <View style={{ marginTop: wp('5%') }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <LatestListingsComp
                                    labelValue={"3 Room on 2nd Floor"}
                                    name={"James Clear"}
                                    location={"Location : abc Town , Washington, DC"}

                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default RoomsProposals;


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
        fontSize: 16,
        marginTop: wp('3%')
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