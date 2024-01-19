import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import { useSelector } from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPixel } from '../../../Constants';

const AgencyLocation = ({ navigation }) => {
    const usertype = useSelector((state) => state.auth.usertype)
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{}}>
                <IconHeaderComp
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                    heading={usertype === "ServiceSide" ? "Your location where your listed rooms located?" : "Your location where your agency located?"}
                />
                <View>
                    <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Enter your location: </Apptext>
                </View>
                <View style={{ marginBottom: heightPixel(50) }} >
                    <FormInput
                        title={"Street Address"}
                    />
                    <FormInput
                        title={"Apartment Number"}
                    // borderColor={DefaultStyles.colors.black}
                    // borderWidth={1}
                    />
                    <FormInput
                        title={"ZIP Code"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                    />
                    <FormInput
                        title={"State"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                    />
                </View>
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Next"}
                onPress={() => navigation.navigate(usertype === "ServiceSide" ? "AgencyMap" : "PaymentPlans")}
            />
        </View>
    )
}

export default AgencyLocation;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
});