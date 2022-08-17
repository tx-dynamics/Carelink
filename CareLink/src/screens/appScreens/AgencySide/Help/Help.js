import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import { useSelector } from 'react-redux';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';

const Help = ({ navigation }) => {

    const usertype = useSelector((state) => state.auth.usertype)
    return (
        <View style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={usertype === "ServiceSide" ? 
                "This is Care Link Help center. Proceed your query with us."
                 :
                 "This is a help center of CARE LINK .Submit your problems here"
                 
                }
                style={usertype === "ServiceSide" ? {} : styles.createTxt}
            />

            <View>
                <FormInput
                    title={"Name"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    title={"Email"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    title={"Your Problem"}
                />
            </View>
            <View style={{ marginTop: wp('40%') }}>
                <FormButton
                    buttonTitle={usertype === "ServiceSide" ? "Submit " : "Submit Now"}
                    width={usertype === "ServiceSide" ? wp('45%') : wp('90%')}
                    height={wp('13%')}
                    fontSize={usertype === "ServiceSide" ? 17 : 21}
                    borderRadius={usertype === "ServiceSide" ? 10 : 30}
                />
            </View>
        </View>
    )
}

export default Help;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('7%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
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
    }
});