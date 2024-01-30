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

const EmailVerification = ({ navigation }) => {
    const [isOTP, setIsOTP] = useState(null)
    const [visible, setVisible] = useState(false)
    const onCountinue = () => {
        setVisible(true)
        setTimeout(() => {
            navigation.replace(routes.addDocuments)
            // setVisible(false)
        }, 1500);
    }
    useEffect(() => {
        setVisible(false)
        return (
            setVisible(false)
        )
    }, [])
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{}}>
                <IconHeaderComp title={"Verify"} heading={"Enter the code we just sent your email"} style={styles.headerTextStyle}
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
                <Text style={styles.resendText}>Didn’t get code? -<Text style={{ textDecorationLine: "underline" }}> Resend code</Text></Text>
            </KeyboardAwareScrollView>
            <FormButton onPress={onCountinue} buttonTitle={"Continue"} />
            <EmailVerifiedModal visible={visible} subtitle={"You have successfully verified your email"} title={"Email verified"} />
        </View>
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