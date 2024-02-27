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
import { appIcons } from '../../../Constants/Utilities/assets';
import { fonts } from '../../../Constants/Fonts';
import AlreadyText from '../../../components/AlreadyText/AlreadyText';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import EmailVerifiedModal from '../../../components/EmailVerifiedModal/EmailVerifiedModal';
import { SuccessFlashMessage } from '../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const ForgetUpdateScreen = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const [isPassword, setPassword] = useState("")
    const [isPasswordConfirm, setPasswordConfirm] = useState("")
    const [isSecure, setSecure] = useState(true)
    const [isSecureConfirm, setSecureConfirm] = useState(true)
    const onPressUpdate = () => {
        SuccessFlashMessage("Password updated successfully")
        navigation.navigate(routes.loginScreen)
    }
    return (
        <AppGLobalView style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
                <IconHeaderComp title={"Update Password"}
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                // heading={"Sign in to continue to the care link"}
                />
                <View>
                    <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Enter new password</Apptext>
                </View>
                <View style={{ marginTop: heightPixel(15) }}>
                    <AppTextInput value={isPassword} onChangeText={setPassword} title={"Password"} secureTextEntry={isSecure} right={isSecure ? appIcons.hide : appIcons.show} rightPress={() => setSecure(!isSecure)} />
                    <AppTextInput value={isPasswordConfirm} onChangeText={setPasswordConfirm} title={"Confirm Password"} secureTextEntry={isSecureConfirm} right={isSecureConfirm ? appIcons.hide : appIcons.show} rightPress={() => setSecureConfirm(!isSecureConfirm)} />
                    {/* <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} /> */}
                    {/* <NewSimpleTextinput inputStyle={{}} title={"Password"} secureTextEntry={isSecure} rightPress={() => setSecure(!isSecure)} right={isSecure ? appIcons.hide : appIcons.show} /> */}
                </View>
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Update Password"}
                // onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
                onPress={onPressUpdate}
            />
            {/* <AlreadyText onPress={() => navigation.navigate("Register")} title={"I don’t have Account."} subtitle={" Sign Up"} /> */}
            {/* <EmailVerifiedModal visible={isVisible} subtitle={"Password Updated"} title={"Password Updated"} /> */}
        </AppGLobalView>
    )
}

export default ForgetUpdateScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: heightPixel(0),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: fontPixel(20),
        marginHorizontal: widthPixel(20)
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