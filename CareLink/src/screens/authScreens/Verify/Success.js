import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';

const Success = ({ navigation }) => {

    return (

        <ScrollView style={styles.container}>
       
            <IconHeaderComp
                onPress={() => { navigation.goBack() }}
                imgName={iconPath.leftArrow}
                heading={"You have created account successfully!"}
                style={styles.createTxt}
            />
            <View style={styles.DirectionView}>
                <Image
                    style={{ tintColor: DefaultStyles.colors.primary }}
                    source={require('../../../../assets/circleProfile.png')} />
                <Apptext style={styles.smallTxt} >Now complete your agency profile</Apptext>
            </View>
            <View style={styles.DirectionView}>
                <Image
                    style={{ tintColor: DefaultStyles.colors.primary }}

                    source={require('../../../../assets/man.png')} />
                <Apptext style={styles.smallTxt2} >Build a agency profile to show the world what you can offer </Apptext>
                <Apptext style={styles.divider}> </Apptext>
            </View>
            <View style={styles.DirectionView}>
                <Image
                    style={{ tintColor: DefaultStyles.colors.primary }}

                    source={require('../../../../assets/openmsg.png')} />
                <Apptext style={styles.smallTxt2} >Apply for open roles or list services for clients to buy </Apptext>
                <Apptext style={styles.divider}> </Apptext>
            </View>
            <View style={styles.DirectionView}>
                <Image
                    style={{ tintColor: DefaultStyles.colors.primary }}

                    source={require('../../../../assets/dollar.png')} />
                <Apptext style={styles.smallTxt2}>Get paid safely and know we’re there to help </Apptext>
                <Apptext style={styles.divider}> </Apptext>
            </View>

            <View style={{ marginTop: wp('20%') }}>
                <FormButton
                    buttonTitle={"Start Now"}
                    onPress={() => { navigation.navigate("AgencyBasic") }}
                    width={wp('90%')}
                />
            </View>
        </ScrollView>
    )
}

export default Success;


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
    DirectionView: {
        alignItems: 'center',
        marginTop: wp('9%')
    },
    smallTxt: {
        marginTop: wp('7%'),
        fontSize: 16
    },
    smallTxt2: {
        marginTop: wp('3%'),
        fontSize: 11
    },
    divider: {
        marginTop: 13,
        height: 1,
        width: wp('90%'),
        backgroundColor: "#C3C3C3",
    }

});