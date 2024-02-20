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
import { fontPixel, heightPixel, routes } from '../../../Constants';
import NewSimpleTextinput from '../../../components/NewSimpleTextinput/NewSimpleTextinput';
import { appIcons } from '../../../Constants/Utilities/assets';
import { fonts } from '../../../Constants/Fonts';
import AlreadyText from '../../../components/AlreadyText/AlreadyText';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import { isSignupValid } from '../../../Constants/Utilities/validations';
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar';

const Register = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [isPassword, setPassword] = useState("")
    const [isPasswordConfirm, setPasswordConfirm] = useState("")
    const [isSecure, setSecure] = useState(true)
    const [isSecureConfirm, setSecureConfirm] = useState(true)
    const onSignUp = () => {
        //APK // if (isSignupValid(firstName, lastName, email, isPassword, isPasswordConfirm))
        //     navigation.navigate("EmailVerification", { register: true })
        navigation.navigate("EmailVerification", { register: true })
    }
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <IconHeaderComp title={"Sign Up"}
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={usertype === "ServiceSide" ? "Create a free account to see your best match" : "Create a free account to start your agency"}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}>
                <View>
                    <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Enter your Information: </Apptext>
                </View>
                <View style={{ marginTop: heightPixel(1) }}>
                    <AppTextInput value={firstName} onChangeText={setFirstName} title={"First name"} />
                    <AppTextInput mainViewStyle={styles.marginView} value={lastName} onChangeText={setLastName} title={"Last name"} />
                    <AppTextInput mainViewStyle={styles.marginView} value={email} onChangeText={setEmail} title={"Email"} />
                    <AppTextInput mainViewStyle={styles.marginView}
                        value={isPassword}
                        onChangeText={setPassword}
                        title={"Password"}
                        secureTextEntry={isSecure}
                        right={isSecure ? appIcons.hide : appIcons.show}
                        rightPress={() => setSecure(!isSecure)}
                    />
                    <AppTextInput mainViewStyle={styles.marginView}
                        value={isPasswordConfirm}
                        onChangeText={setPasswordConfirm}
                        title={"Confirm password"}
                        secureTextEntry={isSecureConfirm}
                        right={isSecureConfirm ? appIcons.hide : appIcons.show}
                        rightPress={() => setSecureConfirm(!isSecureConfirm)}
                    />
                    {/* <NewSimpleTextinput onChangeText={setFirstName} value={firstName} title={"First name"} /> */}
                    {/* <NewSimpleTextinput onChangeText={setLastName} value={lastName} title={"Last name"} /> */}
                    {/* <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} /> */}
                    {/* <NewSimpleTextinput inputStyle={{}} title={"Password"} secureTextEntry={isSecure} rightPress={() => setSecure(!isSecure)} right={isSecure ? appIcons.hide : appIcons.show} /> */}
                </View>
                <View style={styles.termsTxt} >
                    <Apptext style={styles.createTxt1} >By clicking “ Join now,”you agree to our
                    </Apptext>
                    <View style={styles.termsUse}>
                        <TouchableOpacity onPress={() => navigation.navigate(routes.termsAndCondition)}>
                            <Apptext style={styles.hyperLink}>Terms of Use</Apptext>
                        </TouchableOpacity>
                        <Apptext style={styles.createTxt1}> and </Apptext>
                        <TouchableOpacity onPress={() => navigation.navigate(routes.privacyPlicy)}>
                            <Apptext style={styles.hyperLink} >Privacy Policy</Apptext>
                        </TouchableOpacity>
                        <Apptext style={styles.createTxt1}>.</Apptext>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Join Now"}
                // onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
                onPress={onSignUp}
            />
            <AlreadyText title={"Already Have an Account"} subtitle={" Sign In"} onPress={() => navigation.navigate(routes.loginScreen)} />
        </View>
    )
}

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: heightPixel(10),
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
        alignSelf: 'center',
        marginBottom: heightPixel(10)
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
    marginView: { marginTop: heightPixel(30) },
});