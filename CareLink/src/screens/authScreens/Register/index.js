import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import { useSelector } from 'react-redux';


const Register = ({ navigation }) => {

    const usertype = useSelector((state) => state.auth.usertype)

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
            {usertype === "ServiceSide" ? 
                <Apptext style={styles.createTxt}>Create a free account to see your best match  </Apptext>
                :
                <Apptext style={styles.createTxt}>Create a free account to start your agency </Apptext>
                }
            </View>
            <View>
                <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Enter your Information: </Apptext>
            </View>
            <View style={{marginTop:-10}}>
                <FormInput
                    title={"First name"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    title={"Last name"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    title={"Email"}
                />
                <FormInput
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    title={"Password"}
                />
            </View>
            <View style={styles.termsTxt} >
                <Apptext style={styles.createTxt1} >By clicking “ Join now,”you agree to our 
                </Apptext>
                <View style={{flexDirection:'row', alignSelf:'center' }}>
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
            <View style={{ marginTop: wp('6%') }}>
                <FormButton
                    buttonTitle={"Create Now"}
                    onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification") }
                />
            </View>
        </ScrollView>
    )
}

export default Register;


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
    createTxt1:{
        alignSelf:'center', fontSize:13, fontFamily:'Poppins-Regular' 
    },
    termsTxt: {
        width:wp('90%'),marginTop:41,
        // backgroundColor:"red",
        alignSelf:'center'
    },
    hyperLink: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: "#004cbe"
    }
});