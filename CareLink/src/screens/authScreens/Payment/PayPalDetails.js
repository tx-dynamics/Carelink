import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';

const PayPalDetails = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Apptext style={styles.createTxt}>Add Paypal Details </Apptext>
                <Image style={{ marginLeft: -25 }} source={require('../../../../assets/paypal.png')} />
            </View>
            <View style={[styles.inputContainer, { marginTop: wp('6%') }]}>
                <TextInput
                    numberOfLines={1}
                    placeholder={"Email"}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    numberOfLines={1}
                    placeholder={"Password"}
                />
            </View>
            <View style={{ marginTop: wp('95%') }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    height={wp('15%')}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </ScrollView>
    )
}

export default PayPalDetails;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    inputContainer: {
        width: wp('90%'),
        marginTop: wp('8%'),
        alignSelf: 'center',
        paddingLeft: wp('4%'),
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: DefaultStyles.colors.black
    },
    HumanInput: {
        width: wp('70%'),

    },
});