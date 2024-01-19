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
import { heightPixel } from '../../../Constants';
import NewSimpleTextinput from '../../../components/NewSimpleTextinput/NewSimpleTextinput';
import { appIcons } from '../../../Constants/Utilities/assets';

const Register = ({ navigation }) => {
    const usertype = useSelector((state) => state.auth.usertype)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [isSecure, setSecure] = useState(true)
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView >
                <IconHeaderComp
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                    heading={usertype === "ServiceSide" ? "Create a free account to see your best match" : "Create a free account to start your agency"}
                />
                <View>
                    <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Enter your Information: </Apptext>
                </View>
                <View style={{ marginTop: heightPixel(15) }}>
                    <NewSimpleTextinput onChangeText={setFirstName} value={firstName} title={"First name"} />
                    <NewSimpleTextinput onChangeText={setLastName} value={lastName} title={"Last name"} />
                    <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} />
                    <NewSimpleTextinput inputStyle={{}} title={"Password"} secureTextEntry={isSecure} rightPress={() => setSecure(!isSecure)} right={isSecure ? appIcons.hide : appIcons.show} />
                </View>
                <View style={styles.termsTxt} >
                    <Apptext style={styles.createTxt1} >By clicking “ Join now,”you agree to our
                    </Apptext>
                    <View style={styles.termsUse}>
                        <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
                            <Apptext style={styles.hyperLink}>Terms of Use</Apptext>
                        </TouchableOpacity>
                        <Apptext style={styles.createTxt1}> and </Apptext>
                        <TouchableOpacity onPress={() => navigation.navigate("Policy")}>
                            <Apptext style={styles.hyperLink} >Privacy Policy</Apptext>
                        </TouchableOpacity>
                        <Apptext style={styles.createTxt1}>.</Apptext>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Create Now"}
                onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
            />
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
    }
});