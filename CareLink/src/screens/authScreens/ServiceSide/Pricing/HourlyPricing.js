import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import RoomsComp from '../../../../components/RoomsComp';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';

const HourlyPricing = ({ navigation }) => {

    return (
        <View style={styles.container}>
       
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Set up availibilty time"}
            />
            <Apptext style={styles.bkTxt} >Time Availibilty:</Apptext>
            <View style={{ marginTop: -15 }}>
                <FormInput
                    title="Time"
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    rightImgName={require('../../../../../assets/clock.png')}
                    
                />
                {/* <FormInput
                    title="Minimum hours per booking"
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                /> */}
            </View>
            {/* <View style={styles.priceTxt}>
                <TouchableOpacity onPress={() => navigation.navigate("PricingType")}>
                    <Apptext style={styles.hyperLink}>Change price type</Apptext>
                </TouchableOpacity>
            </View> */}
            <View style={{marginTop:wp('70%')}}>
            <FormButton
                buttonTitle={"Next"}
                width={"90%"}
                onPress={() => navigation.navigate("Note")}
            />
            </View>
        </View>
    )
}

export default HourlyPricing;


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
    bkTxt: {
        fontSize: 23,
        fontFamily: 'Poppins-Medium',
        marginHorizontal: wp('5%'),
        marginTop: wp('4%')
    },
    hyperLink: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: "#004cbe"
    },
    priceTxt: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: wp('6%'),
        marginTop: wp('8%')
    }

});