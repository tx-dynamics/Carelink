import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import { useSelector } from 'react-redux';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';

const AgencyMap = ({ navigation }) => {
    const usertype = useSelector((state) => state.auth.usertype)
    return (
        <View style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Pin your listed room location on the map"}
            />
                <ImageBackground 
                style={styles.imgView}
                source={require('../../../../assets/map.png')}>
                    <Image style={{ marginTop:wp('18%')}} source={require('../../../../assets/pin-fill.png')}  />
               <TouchableOpacity style={styles.pinkBox} >
               <Image source={require('../../../../assets/zoom.png')}  />
               </TouchableOpacity>
                </ImageBackground> 
            <View>
                <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Address</Apptext>
                <Apptext style={[styles.adrs]}>123 street, 11 apartment ,USA,11221</Apptext>
            </View>
            <View style={{ marginTop: wp('10%')  }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    onPress={() => usertype === "ServiceSide" ? navigation.navigate("Register") : navigation.navigate("PaymentPlans") }
                />
            </View>
        </View>
    )
}

export default AgencyMap;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('5%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('6%')
    },
    imgView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        width:wp('90%'),
        height:wp('70%'),
        marginTop:wp('5%'),
        alignSelf:'center',
        borderRadius:10 
    },
    pinkBox:{
        width:51,
        borderRadius:8,
        height:47,
        alignItems:'center',
        justifyContent:'center',
        marginTop:wp('50%'),
        marginHorizontal:wp('5%'),
        backgroundColor:DefaultStyles.colors.primary
    },
    adrs:{
        fontFamily:'Poppins-Regular',
        fontSize:16,
        marginHorizontal:wp('6%'),
        lineHeight:25

    }
});