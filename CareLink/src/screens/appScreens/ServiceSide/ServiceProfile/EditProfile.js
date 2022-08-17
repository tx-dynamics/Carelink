import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';

const EditProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Edit Profile</Apptext>
                </View>
                <TouchableOpacity style={styles.imgView} >
                    <Image style={styles.imgStl}
                        source={require('../../../../../assets/JC.png')} />
                </TouchableOpacity>
                  <View style={{alignSelf:'center'}}>
                <Apptext style={styles.upldTxt} >Upload photo</Apptext>
                </View>
                <View style={{marginTop:wp('5%')}}>
                <FormInput
                    title={"First name"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    title={"Last name"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    title={"Email"}
                />
            </View>

            <View style={{ marginTop: wp('55%') }}>
                <FormButton
                    buttonTitle={"Save Update"}
                    width={wp('90%')}
              />
            </View>

            </ScrollView>
        </View>
    )
}

export default EditProfile;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    imgView: {
        width: wp('30%'),
        marginTop: wp('7%'),
        height: wp('30%'),
        alignSelf: 'center',
        borderRadius: 60
    },
    imgStl:{
        width: wp('30%'), height: wp('30%') 
    },
    upldTxt:{
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop:wp('3%'),
        color:"#407fb9"
    },
    jmsTxt: {
        marginTop: wp('4%'),
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
    dcTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        alignSelf: 'center'
    },
    pinkBox: {
        width: 200,
        borderRadius: 10,
        backgroundColor: DefaultStyles.colors.lightPrimary,
        alignSelf: 'center',
        marginTop: wp('3%')
    },
    mmbrTxt: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: wp('1%')
    },
    btn:{
        backgroundColor:DefaultStyles.colors.primary,
        borderRadius:30,
        width:103, 
        alignSelf:'center',
        padding:5,
        marginTop: wp('13%'),

    },
    acntTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        alignSelf: 'center',
        color: DefaultStyles.colors.white,
    }
    ,
    txtView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:wp('1%'),
        marginHorizontal:wp('5%')
    },
    rms:{
        fontFamily:'Poppins-SemiBold',
        fontSize:17
    },
    dtls:{
        color:DefaultStyles.colors.black,
        textDecorationLine: 'underline', 
    },
 

});