import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NewAppTextInput from '../../../../components/NewAppTextInput/NewAppTextInput';
import colors from '../../../../config/colors';
import { heightPixel } from '../../../../Constants';

const Note = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Write your note if you want any?"}
            />
            <KeyboardAwareScrollView style={{}}>
                <Apptext style={styles.bkTxt} >Click to write:</Apptext>
                <NewAppTextInput />
            </KeyboardAwareScrollView>
            <FormButton backgroundColor={colors.skipButtonColor}
                buttonTitle={"Skip"}
                color={colors.black}
                width={"90%"}
                onPress={() => navigation.navigate("AgencyLocation")}
            />
            <FormButton
                buttonTitle={"Next"}
                width={"90%"}
                onPress={() => navigation.navigate("AgencyLocation")}
            />
        </View>
    )
}

export default Note;


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
    bkTxt: {
        fontSize: 23,
        fontFamily: 'Poppins-Medium',
        marginHorizontal: wp('5%'),
        // marginTop: wp('4%')
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
        marginTop: wp('10%')
    }

});