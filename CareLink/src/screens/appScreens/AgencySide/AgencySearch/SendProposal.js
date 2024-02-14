import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import { heightPixel } from '../../../../Constants';
import { SuccessSnackbar } from '../../../../Constants/Utilities/assets/Snakbar';

const SendProposal = ({ navigation }) => {
    const [value, setValue] = useState("")
    const onPressSubmit = () => {
        navigation.navigate("AgencyHome")
        SuccessSnackbar("Your proposal has been submitted")
    }
    return (
        <View style={styles.container}>
            <Header headerLabel={"Submit Proposal"}
                leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView style={{}}>
                <Apptext style={styles.dtlsTxt}>Write Your Effective Proposal or cover letter to win this Listing</Apptext>
                <AppTextInput value={value} onChangeText={setValue} title={"Cover Letter"} multiline containerStyle={{ height: null, minHeight: heightPixel(80), maxHeight: heightPixel(220), }} />

            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Submit Now"}
                onPress={onPressSubmit}
            />
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