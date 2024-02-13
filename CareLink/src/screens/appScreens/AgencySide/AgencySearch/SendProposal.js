import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import { appIcons } from '../../../../Constants/Utilities/assets';

const SendProposal = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header headerLabel={"Submit Proposal"}
                leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()}
            />
            <Apptext style={styles.dtlsTxt}>Write Your Effective Proposal or cover letter to win this Listing</Apptext>
            <View >
                <FormInput
                    title={"Cover Letter"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
            </View>
            <View style={{ marginTop: wp('65%') }}>
                <FormButton
                    width={wp('90%')}
                    buttonTitle={"Submit Now"}
                    onPress={() => navigation.navigate("AgencyHome")}
                />
            </View>
        </View>
    )
}

export default SendProposal;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'), marginHorizontal: wp('5%')
    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    dtlsTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        marginHorizontal: wp('5%'),
        // marginTop: wp('5%'),

    },
    jobsTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginHorizontal: wp('5%')
    },
    marginView: {
        marginHorizontal: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    pinkBox: {
        backgroundColor: '#ffabff',
        marginTop: wp('5%'),
        borderRadius: 6,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('23%')
    },
    pinkboxTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 90
    }



});