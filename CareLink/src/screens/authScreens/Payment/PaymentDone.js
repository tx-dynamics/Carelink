import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import SelectCardComp from '../../../components/SelectCardComp';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setUser } from '../../../redux/actions/authAction';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';

const PaymentDone = ({ navigation }) => {

    let dispatch = useDispatch()
    const usertype = useSelector((state) => state.auth.usertype)
    const user = useSelector((state) => state.auth.user)

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "*** ***  *5695",
            leftImg:require('../../../../assets/Bvisa.png'),
            rightImg:require('../../../../assets/roundTick.png'),

            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    
        {
            id: 'bd2327ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "*** ***  *8569",
            leftImg:require('../../../../assets/master1.png'),
            rightImg:require('../../../../assets/roundTick.png'),
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
        
        {
            id: 'bd7ac4bea-c1b51-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "*** *** *5869",
            leftImg:require('../../../../assets/card.png'),
            rightImg:require('../../../../assets/roundTick.png'),
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    ];

    return (
        <View style={styles.container}>
        
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
            />
            {/* //////////////////////////////////// */}
            <View style={styles.centerView}>
                <Image
                style={{tintColor: DefaultStyles.colors.primary }}
                source={require('../../../../assets/bigCircleTick.png')} />
                <Apptext style={styles.doneTxt}>Payment done</Apptext>
            </View>
         {usertype ==="ServiceSide" ?
         <View style={[styles.txtView, {marginTop:wp('4%')}]} >
                <Apptext style={styles.roomsTxt}> Your Rooms  </Apptext>
                <Apptext style={styles.roomsTxt}> Successfully Registerd </Apptext>
            </View> :
            <View style={[styles.txtView, {marginTop:wp('4%')}]} >
                <Apptext style={styles.roomsTxt}> Congratulations </Apptext>
                <Apptext style={styles.roomsTxt}> You’re All Set </Apptext>
            </View>
            }
            <View style={styles.txtView} >
                <Apptext style={styles.submitTxt}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mauris at at nullam. Risus enim tellus pretium faucibus. </Apptext>
            </View>

            <View style={{marginTop:wp('35%')}} >
            <FormButton
                    buttonTitle={"Get Started"}
                    width={'88%'}
                    onPress={() => dispatch(setUser(true))}
                />
            </View>
        </View>
    )
}

export default PaymentDone;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    doneTxt: {
        fontSize:20,
        fontFamily:'Poppins-Regular',
        marginTop:wp('2%'),
        color:'#00da09'
    },
    centerView:{
        alignSelf:'center',
        alignItems:'center',
        // marginTop:wp('5%')
    },
    txtView: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('5%'),
        alignItems:'center'
    },
    roomsTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:24
    },
    submitTxt: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',

    },
    marginView:{
        marginHorizontal:wp('5%')
    },
    selectTxt:{
        marginTop:wp('10%'),
        color:DefaultStyles.colors.lightgray,
        fontSize:12,
        fontFamily:'Poppins-Regular'
    }
});