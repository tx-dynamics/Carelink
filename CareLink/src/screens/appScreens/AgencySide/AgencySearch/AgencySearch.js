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

const AgencySearch = ({ navigation }) => {

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
                rightImg={require('../../../../../assets/sendIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: "Messages" })}
                headerLabel={"Find Listings"}
            />
            <ScrollView>
                <View style={styles.marginView} >
                    <TouchableOpacity style={styles.searchBar}>
                        <Image style={{ width: 15, height: 15, tintColor: "lightgray", marginHorizontal: 20 }}
                            source={require('../../../../../assets/search.png')} />
                        <TextInput
                            style={{ color: 'grey', marginLeft: -10, width: wp('70%') }}
                            placeholder='Search'
                            onChangeText={(val) => console.log(val)}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: wp('8%'), justifyContent: 'space-between' }}>
                        <Apptext style={styles.rms} >Latest Listings</Apptext>
                    </View>
                    <View style={{ marginTop: 21 }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <LatestListingsComp
                                    labelValue={"3 Room on 2nd Floor"}
                                    when={"Right Now"}
                                    showHrt={true}
                                    fors={"For 20 days"}
                                    hourly={"$20 - 70 Hourly"}
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ListingDetails" })}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AgencySearch;


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


});