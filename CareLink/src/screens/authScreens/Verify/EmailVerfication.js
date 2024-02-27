import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../Constants';
import { fonts } from '../../../Constants/Fonts';
import colors from '../../../config/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EmailVerifiedModal from '../../../components/EmailVerifiedModal/EmailVerifiedModal';
import { RedFlashMessage, SuccessFlashMessage } from '../../../Constants/Utilities/assets/Snakbar';
import { useSelector } from 'react-redux';
import { userType } from '../../../redux/Slices/splashSlice';
import CountDownComponent from '../../../components/CountDownComponent/CountDownComponent';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const EmailVerification = ({ navigation, route }) => {
    const [isOTP, setIsOTP] = useState("")
    const [visible, setVisible] = useState(false)
    const usertype = useSelector((state) => state.splash.userType)
    const onCountinue = () => {
        //APK // if (isOTP == "") {
        // RedFlashMessage("Please enter OTP")
        //     return
        // }
        // if (isOTP.length < 4) {
        // RedFlashMessage("Please enter a 4 digit OTP")
        //     return
        // }
        // setVisible(true)
        // setTimeout(() => {
        SuccessFlashMessage("Email verified successfully")
        if (usertype == "ServiceSide") {
            route.params?.register ? navigation.replace(routes.addDocuments) : navigation.replace(routes.forgetPasswordUpdate)
        }
        if (usertype == "AgencySide") {
            route.params?.register ? navigation.replace(routes.successAgency) : navigation.replace(routes.forgetPasswordUpdate)
        }

        // }, 1500);
    }
    // useEffect(() => {
    //     // setVisible(false)
    //     return (
    //         setVisible(false)
    //     )
    // }, [])
    return (
        <AppGLobalView style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
                <IconHeaderComp title={"Verify"} heading={"Enter the code we just sent to your email"} style={styles.headerTextStyle}
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow}
                />
                <Text numberOfLines={1} style={styles.mailText}>myemail@gmail.com</Text>
                <OTPInputView
                    pinCount={4}
                    autoFocusOnLoad={false}
                    style={styles.OTPView}
                    onCodeChanged={setIsOTP}
                    selectionColor={colors.primary}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    keyboardType='number-pad'
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                />
                <CountDownComponent />
            </KeyboardAwareScrollView>
            <FormButton onPress={onCountinue} buttonTitle={"Continue"} />
            <EmailVerifiedModal visible={visible} subtitle={"You have successfully verified your email"} title={"Email verified"} />
        </AppGLobalView>
    )
}

export default EmailVerification;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    headerTextStyle: {
        fontSize: fontPixel(20),
        fontFamily: fonts.Poppins_Medium
    },
    mailText: {
        fontSize: fontPixel(20),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black12,
        marginTop: heightPixel(10),
        paddingHorizontal: widthPixel(20)
    },
    OTPView: {
        alignSelf: "center",
        width: '72%',
        height: heightPixel(120),
    },
    underlineStyleBase: {
        color: colors.black,
        width: widthPixel(58),
        height: heightPixel(44),
        borderWidth: 1,
        borderRadius: widthPixel(15),
        borderColor: colors.black12,
    },
    underlineStyleHighLighted: {
        borderWidth: 2
    },
    resendText: {
        textAlign: "center",
        marginTop: heightPixel(50),
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black12
    },
});