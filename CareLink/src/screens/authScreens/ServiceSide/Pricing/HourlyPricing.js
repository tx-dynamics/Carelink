import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import RoomsComp from '../../../../components/RoomsComp';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';


const HourlyPricing = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                <Apptext style={styles.createTxt}>Set up your pricing </Apptext>
            </View>
            <Apptext style={styles.bkTxt} >Hourly Pricing:</Apptext>
            <View style={{ marginTop: -15 }}>
                <FormInput
                    title="From"
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    
                />
                <FormInput
                    title="To"
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
            </View>
            <View style={styles.priceTxt}>
                <TouchableOpacity onPress={() => navigation.navigate("PricingType")}>
                    <Apptext style={styles.hyperLink}>Change price type</Apptext>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:wp('50%')}}>
            <FormButton
                buttonTitle={"Next"}
                width={"90%"}
                onPress={() => navigation.navigate("Note")}
            />
            </View>
        </ScrollView>
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