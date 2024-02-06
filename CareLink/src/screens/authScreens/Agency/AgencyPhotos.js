import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';

const AgencyPhotos = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <IconHeaderComp
                onPress={() => { navigation.goBack() }}
                imgName={iconPath.leftArrow}
                heading={"Add your agency cover and profile photo"}
                style={styles.createTxt}
            />
            <TouchableOpacity style={styles.cover}>
                <Image source={require('../../../../assets/addPhoto.png')} />
                <Apptext style={styles.cvrTxt}>Add Cover Photo</Apptext>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileView}>
                <Image source={require('../../../../assets/profile.png')} />
            </TouchableOpacity>
            <Apptext style={styles.addTxt} >Add profile</Apptext>
            <View style={{ marginTop: wp('32%') }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    height={wp('15%')}
                    onPress={() => navigation.navigate("AgencyLocation")}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("AgencyLocation")}>
                <Apptext style={styles.skipTxt} >Skip for now</Apptext>
            </TouchableOpacity >
        </ScrollView>
    )
}

export default AgencyPhotos;


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
    skipTxt: {
        alignSelf: 'center',
        marginTop: wp('1%'),
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: DefaultStyles.colors.primary
    },
    cover: {
        marginTop: wp('7%'),
        width: wp('100%'),
        height: wp('77%'),
        backgroundColor: "#cccccc",
        alignItems: 'center',
        justifyContent: 'center'
    },
    cvrTxt: {
        marginTop: wp('3%'),
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: DefaultStyles.colors.gray
    },
    profileView: {
        width: wp('36%'),
        height: wp('36%'),
        marginTop: -65,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 8
    },
    addTxt: {
        alignSelf: 'center',
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 19
    }

});