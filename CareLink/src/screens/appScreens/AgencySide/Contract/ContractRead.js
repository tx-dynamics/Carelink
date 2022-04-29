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


const ContractRead = ({ navigation }) => {

    const Host = ["HOST HOME SERVICES PROVIDER AND/OR TEMPORARY SUPERVISION SERVICES PROVIDER INDEPENDENT CONTRACTORS AGREEMENT"]

    const one = [`
WHEREAS, UPLIFT LLC referred to as “UPLIFT LLC”, whose address is 

_______________________________

intends to contract with

_______________________________

SSN:
_______________________________

as a Provider, whose address is

_______________________________

hereinafter referred to as “Provider”;     
`]


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

            <ScrollView>

                <View>
                    <Apptext style={styles.msgTxt} >Read And FIll the General Contract </Apptext>
                </View>

                <View>
                    <Apptext style={styles.hostTxt} >{Host} </Apptext>
                </View>
                <View>
                    <Apptext style={styles.oneTxt} >{one} </Apptext>
                </View>

                <View style={{ marginTop: wp('35%') }}>
                    <FormButton
                        buttonTitle={"Next"}
                        width={wp('88%')}
                        onPress={() => navigation.navigate("Read1")}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default ContractRead;


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