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
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StartContract = ({ navigation }) => {

    const [isValue, setValue] = useState('');
    const [isKitchen, setKitchen] = useState(false)
    const [isParking, setParking] = useState(false)


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

            <ScrollView>

                <View>
                    <Apptext style={styles.msgTxt} >Choose What you want Extras </Apptext>
                </View>

                <View style={styles.DirectionView}>


                    <TouchableOpacity
                        onPress={() => {
                            // setParking(false)
                            setKitchen(!isKitchen)
                        }}
                        style={styles.radioBtn}>
                        {isKitchen ?
                            <Image style={{ tintColor: DefaultStyles.colors.primary }} 
                            source={require('../../../../../assets/tickBox.png')} />
                            : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // setKitchen(false)
                            setParking(!isParking)
                        }}
                        style={styles.radioBtn}>
                        {isParking ?
                            <Image style={{ tintColor: DefaultStyles.colors.primary }}
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

                <View style={{ marginTop:  wp('70%') }}>
                <FormButton
                    buttonTitle={"Start Contract"}
                    onPress={() => navigation.navigate("MakeContract")}
             />
            </View>
            </ScrollView>
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
        fontSize: 16
    },
    radioBtn:{
        marginTop:wp('20%'),
        width:30,
        height:30,
        borderRadius:10,
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