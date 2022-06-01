import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';


const EmailVerification = ({ navigation }) => {

    return (

        <View style={styles.container}>

            <IconHeaderComp
                onPress={() => { navigation.goBack() }}
                imgName={iconPath.leftArrow}
            />

            <View style={styles.logoView}>
                <Image source={require('../../../../assets/emailNew.png')} />
            </View>
            <Apptext style={styles.verifyTxt}>Verify your email to proceed</Apptext>
            <View style={styles.paraView} >
                <Apptext style={styles.paraTxt}>We just sent an email to the address </Apptext>
                <Apptext style={[styles.paraTxt, { fontFamily: 'Poppins-SemiBold' }]}> abc@gmail.com </Apptext>
                <Apptext style={styles.paraTxt} >Please check your email and click on the
                    <Apptext style={[styles.paraTxt, { fontFamily: 'Poppins-SemiBold' }]} > link </Apptext>provided to your address
                </Apptext>
            </View>
            <View style={{ marginTop: wp('17%') }}>
                <FormButton
                    buttonTitle={"Resend Email"}
                    width={wp('90%')}
                    onPress={() => navigation.navigate("Verified")}
                />
            </View>
        </View>
    )
}

export default EmailVerification;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    logoView: {
        alignSelf: 'center',
        marginTop: wp('5%')
    },
    verifyTxt: {
        marginTop: wp('8%'),
        fontSize: 24,
        width: wp('95%'),
        textAlign: 'center',
        color: DefaultStyles.colors.black,
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular'
    },
    paraTxt: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        lineHeight: 24
    },
    paraView: {
        marginTop: wp('10%'),
        // backgroundColor:"red",
        width: wp('90%'),
        alignSelf: 'center'
    },
});