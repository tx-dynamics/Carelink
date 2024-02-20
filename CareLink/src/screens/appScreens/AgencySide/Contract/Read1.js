import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';

import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const Read1 = ({ navigation }) => {

    const Host = ["HOST HOME SERVICES PROVIDER AND/OR TEMPORARY SUPERVISION SERVICES PROVIDER INDEPENDENT CONTRACTORS AGREEMENT"]

    const one = [`I.  RECITALS

A.	 UPLIFT LLC is a private business providing services to individuals with intellectual and developmental disabilities and is funded in part by the Colorado Department of Human Services.
    
B.	 UPLIFT LLC, on behalf of the person(s) listed in Exhibit A, an adult individual(s) with intellectual and developmental disabilities, hereinafter referred to as the “Person” is in need of host home services and/or temporary supervision services from the Provider as set forth in Exhibit B of this Agreement.
    
C.	UPLIFT LLC, on behalf of the Person, is also in need of placement, care, supervision, support, and assistance services as outlined in the Individual Plan and the Individual Service and Support Plan.
    
D.	The Provider is customarily engaged in an independent occupation to provide placement, care, supervision, support, and assistance to persons with intellectual and developmental disabilities.  Provider desires to provide such services to the Person at the Provider’s home at
    
____________________________
    
Provider also desires to provide care, supervision, support, and assistance services as outlined in Exhibit B of this Agreement and in accordance with the Individual Plan and Individual Service and Support Plan for the Person.
    `]


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <Apptext style={styles.msgTxt} >Read And FIll the General Contract </Apptext>
                </View>

                <View>
                    <Apptext style={styles.hostTxt} >{Host} </Apptext>
                </View>
                <View>
                    <Apptext style={styles.oneTxt} >{one} </Apptext>
                </View>

                <View style={{ marginTop: wp('15%') }}>
                    <FormButton
                        buttonTitle={"Next"}
                        width={wp('88%')}
                        onPress={() => navigation.navigate("Read2")}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default Read1;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    msgTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%')
    },
    hostTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%'),
        marginTop: wp('8%')
    },
    oneTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%'),
        marginTop: wp('8%')
    }

});