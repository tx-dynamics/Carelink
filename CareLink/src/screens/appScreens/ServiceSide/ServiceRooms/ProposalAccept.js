import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormButton from '../../../../components/FormButton';

const ProposalAccept = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* //////////////////////////////////// */}
            <View style={styles.centerView}>
                <Image
                    style={{ tintColor: DefaultStyles.colors.primary }}
                    source={require('../../../../../assets/bigCircleTick.png')} />
            </View>

            <View style={[styles.txtView, { marginTop: wp('4%') }]} >
                <Apptext style={styles.roomsTxt}> Proposal Accepted </Apptext>
                <Apptext style={[styles.roomsTxt1]}> Your are successfully signed</Apptext>
                <Apptext style={[styles.roomsTxt1]}> with <Apptext style={[styles.roomsTxt1]}>ABD Rental Agency</Apptext></Apptext>
            </View>

            <View style={styles.txtView} >
                <Apptext style={styles.submitTxt}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mauris at at nullam. Risus enim tellus pretium faucibus. </Apptext>
            </View>

            <View style={{ marginTop: wp('35%') }} >
                <FormButton
                    buttonTitle={"Continue"}
                    width={'88%'}
                />
            </View>
        </View>
    )
}

export default ProposalAccept;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    doneTxt: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginTop: wp('2%'),
        color: '#00da09'
    },
    centerView: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: wp('25%')
    },
    txtView: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('5%'),
        alignItems: 'center'
    },
    roomsTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24
    },
    roomsTxt1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 19
    },
    submitTxt: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    marginView: {
        marginHorizontal: wp('5%')
    },
    selectTxt: {
        marginTop: wp('10%'),
        color: DefaultStyles.colors.lightgray,
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    }
});