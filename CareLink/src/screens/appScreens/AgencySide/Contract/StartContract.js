import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';

import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const StartContract = ({ navigation }) => {

    const [isKitchen, setKitchen] = useState(false)
    const [isParking, setParking] = useState(false)

    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />
                <View>
                    <Apptext style={styles.msgTxt} >Choose What you want Extras </Apptext>
                </View>
                <View style={styles.DirectionView}>
                    <TouchableOpacity
                        onPress={() => {
                            setKitchen(!isKitchen)
                        }}
                        style={styles.radioBtn}>
                        {isKitchen ?
                            <Image style={[styles.radioBtn,{
                                marginTop:0,
                                borderRadius:4,
                                borderColor:DefaultStyles.colors.primary,
                                tintColor: DefaultStyles.colors.primary }]} 

                            source={require('../../../../../assets/tickBox.png')} />
                            : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setParking(!isParking)
                        }}
                        style={styles.radioBtn}>
                        {isParking ?
                            <Image 
                            style={[styles.radioBtn,{
                                marginTop:0,
                                borderRadius:4,
                                borderColor:DefaultStyles.colors.primary,
                                tintColor: DefaultStyles.colors.primary }]}
                             source={require('../../../../../assets/tickBox.png')} />
                            : null}
                    </TouchableOpacity>
                </View>
                <View style={[styles.DirectionView, { marginTop: wp('3%') }]}>
                    <Apptext style={styles.descTxt}>Car Parking </Apptext>
                    <Apptext style={[styles.descTxt, { marginHorizontal: wp('5%') }]}>Wheelchair</Apptext>
                </View>

                <View>
                    <Apptext style={[styles.msgTxt, {marginTop:wp('20%') }]} >Choose State </Apptext>
                </View>
                <View>
                <FormInput
                    title={"State"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    placeholderText={"ABC State"}
                    placeholderTextColor={DefaultStyles.colors.textColor}
                />
                </View>
                <View style={styles.lwrTxt}>
                    <Apptext style={styles.lTxt}>Price start In  ABC State is $500 with Extras you should pay $650</Apptext>
                </View>

                <View style={{ marginTop:  wp('5%') }}>
                <FormButton
                    buttonTitle={"Start Contract"}
                    width={wp('88%')}
                    onPress={() => navigation.navigate("MakeContract")}
             />
            </View>
        </View>
    )
}

export default StartContract;


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
    DirectionView: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginHorizontal:wp('6%')
    },
    radioBtn:{
        marginTop:wp('20%'),
        width:30,
        height:30,
        borderRadius:6,
        borderColor:"lightgray",
        borderWidth:1
    },
    lwrTxt:{
        width:wp('90%'),
        alignSelf:'center',
        marginTop:26 
    },
    lTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:15,
        color:DefaultStyles.colors.textColor
    }

});