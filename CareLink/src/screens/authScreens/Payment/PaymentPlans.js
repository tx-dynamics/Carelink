import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import PlansComp from '../../../components/PlansComp';
import { useSelector } from 'react-redux';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { heightPixel } from '../../../Constants';

const PaymentPlans = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            price1: "$199.99",
            plans: "/month",
            label: "Subscribe",
            description: `You will get 20 listing to post in a month with this monthly plan`,
            desc1: "You will get 20 Proposals to submit in a month with this monthly plan"
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$59.99",
            price1: "$299.99",
            plans: "/month",
            label: "Subscribe",
            description: "You will get 50 listing to post in a month with this monthly plan",
            desc1: "You will get 50 Proposals to submit in a month with this monthly plan"
        },

        {
            id: 'bd7acbea-c1b1-46c23-aed5-3ad53abb28ba',
            price: "$99.99",
            price1: "$499.99",
            plans: "/month",
            label: "Subscribe",
            description: "You will get 100 listing to post in a month with this monthly plan",
            desc1: "You will get 100 Proposals to submit in a month with this monthly plan"
        },
    ];

    return (
        <View style={styles.container}>
            <IconHeaderComp
                title={"Subscription"}
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Subscribe your plan to continue"}
            />
            <View style={styles.txtView} >
                <Apptext style={styles.submitTxt} >Subscribe Care Link to submit your rooms listings </Apptext>
                <Apptext style={[styles.submitTxt, { fontFamily: 'Poppins-Medium' }]}>Choose your plan and get started</Apptext>
            </View>
            <FlatList
                ListFooterComponent={() => <View style={{ marginBottom: heightPixel(20) }}></View>}
                data={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <PlansComp
                        btnTxt={item.label}
                        price={usertype === "ServiceSide" ? item.price : item.price1}
                        plan={"/month"}
                        desc={usertype === "ServiceSide" ? item.description : item.desc1}
                        onPress={() => navigation.navigate("PaymentMethod")}
                    />
                )}
            />
        </View>
    )
}

export default PaymentPlans;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    txtView: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('7%')
    },
    submitTxt: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',

    },
});