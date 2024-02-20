import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import { useSelector } from 'react-redux';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../config/colors';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../Constants';
import NewSimpleTextinput from '../../../components/NewSimpleTextinput/NewSimpleTextinput';
import { fonts } from '../../../Constants/Fonts';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';

const ForgetEmailScreen = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const [email, setEmail] = useState("")
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
                <IconHeaderComp title={"Forgot Password"}
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow} style={{ fontSize: fontPixel(20), fontFamily: fonts.Poppins_Medium }}
                    heading={"To reset your password, enter the email address you used to sign up"}
                />
                <View style={{ marginTop: heightPixel(5) }}>
                    <AppTextInput value={email} onChangeText={setEmail} title={"Email"} />
                    {/* <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} /> */}
                </View>
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Continue"}
                // onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
                onPress={() => navigation.navigate("EmailVerification")}
            />
        </View>
    )
}

export default ForgetEmailScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    createTxt1: {
        alignSelf: 'center', fontSize: 13, fontFamily: 'Poppins-Regular'
    },
    termsTxt: {
        width: wp('90%'), marginTop: 41,
        alignSelf: 'center'
    },
    hyperLink: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: "#004cbe"
    },
    termsUse: {
        flexDirection: 'row', alignSelf: 'center'
    },
    forgetText: {
        textAlign: "right",
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Medium,
        color: colors.primary,
        paddingRight: widthPixel(20)
    },
});