import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';


const Help = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
            <Apptext style={[styles.createTxt, { fontFamily:'Poppins-SemiBold'}]}>Help Center</Apptext>

                <Apptext style={[styles.createTxt, {marginTop:wp('4%')}]}>THis is a help center of CARE LINK .Submit your problems here</Apptext>
            </View>
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
                    height={wp('65%')}
                    marginTop={-105}
                />
            </View>
            <View style={{ marginTop: wp('35%') }}>
                <FormButton
                    buttonTitle={"Submit Now"}
                    width={wp('90%')}
                    height={wp('15%')}
                />
            </View>
        </ScrollView>
    )
}

export default Help;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('10%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
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