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
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';


const Read2 = ({ navigation }) => {

    const Host = ["HOST HOME SERVICES PROVIDER AND/OR TEMPORARY SUPERVISION SERVICES PROVIDER INDEPENDENT CONTRACTORS AGREEMENT"]

    const one = [`
In consideration of the foregoing representations and the following terms and conditions, the parties agree:

II.	TERMS AND CONDITIONS

1.	TERM OF AGREEMENT:  The term of this agreement shall be from
_______________________________

and continue in force until
_______________________________

,unless terminated earlier in accordance with the terms of this Agreement.  
    
`]


    return (
        <AppGLobalView style={styles.container}>
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
                        onPress={() => navigation.navigate("Read3")}
                    />
                </View>

            </ScrollView>
        </AppGLobalView>
    )
}

export default Read2;


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
        marginTop: wp('5%')
    }

});