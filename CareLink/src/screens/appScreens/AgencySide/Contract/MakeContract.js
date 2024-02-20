import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';

import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import RoomsComp from '../../../../components/RoomsComp';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MakeContract = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "General Contract",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$59.99",
            plans: "/month",
            label: "ABC Contract",
            description: "You will get 50 listing to post in a month with this monthly plan"
        },

        {
            id: 'bd7acbea-c1b1-46c23-aed5-3ad53abb28ba',
            price: "$99.99",
            plans: "/month",
            label: "XYZ Contract",
            description: "You will get 100 listing to post in a month with this monthly plan"
        },




    ];

    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />
            <View>
                <Apptext style={styles.msgTxt} >Make Contract </Apptext>
            </View>
            <View style={{ alignSelf: 'center', marginTop: wp('10%') }}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={DATA}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <RoomsComp
                            label={item.label}
                            onPress={() => navigation.navigate("ContractRead")}
                        />
                    )}
                />
            </View>

        </View>
    )
}

export default MakeContract;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    msgTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%')
    },
    DirectionView: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    radioBtn: {
        marginTop: wp('20%'),
        width: 30,
        height: 30,
        borderRadius: 10,
        borderColor: "lightgray",
        borderWidth: 1
    },
    lwrTxt: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: 26
    },
    lTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: DefaultStyles.colors.textColor
    }

});