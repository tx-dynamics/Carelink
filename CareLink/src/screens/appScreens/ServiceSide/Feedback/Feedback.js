import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import { DrawerActions, useNavigation } from '@react-navigation/native'


const Feedback = ({ navigation }) => {

    
    const [isParking, setParking] = useState(false)
    const [isKitchen, setKitchen] = useState(false)
    const [isDependable, setDependable] = useState(false)



    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "6",
            plans: "/month",
            label: "Available Rooms",
            color: DefaultStyles.colors.primary,
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "11",
            plans: "/month",
            color: '#999999',
            label: "Booked Rooms",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()}
            />

            <ScrollView>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Submit a feedback to your hired agency</Apptext>
                </View>
                <View style={styles.txtView}>

                    <Apptext style={[styles.rms, {fontFamily:'Poppins-Medium', marginTop: wp('8%') }]} >Click to write: </Apptext>
                </View>
                <View style={{ marginTop: -25 }} >
                    <FormInput
                        title={"Feedback"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                        // height={wp('60%')}
                        // marginTop={-125}
                    />
                </View>
                <View style={[styles.DirectionView1, { marginTop:wp('8%')}]}>
                    <TouchableOpacity
                        onPress={() => {
                            setKitchen(!isKitchen)
                        }}
                        style={styles.radioBtn}>
                        {isKitchen ?
                            <Image style={{width:24, height:24,  tintColor: DefaultStyles.colors.primary }}
                                source={require('../../../../../assets/tickBox.png')} />
                            : null}
                    </TouchableOpacity>
                    <Apptext style={styles.descTxt}>Would rehire</Apptext>
                </View>

                <View style={styles.DirectionView1}>
                    <TouchableOpacity
                        onPress={() => {
                            setDependable(!isDependable)
                        }}
                        style={styles.radioBtn}>
                        {isDependable ?
                            <Image style={{width:24, height:24, tintColor: DefaultStyles.colors.primary }}
                                source={require('../../../../../assets/tickBox.png')} />
                            : null}
                    </TouchableOpacity>
                    <Apptext style={styles.descTxt}>Punctual</Apptext>
                </View>

                <View style={styles.DirectionView1}>
                    <TouchableOpacity
                        onPress={() => {
                            setParking(!isParking)
                        }}
                        style={styles.radioBtn}>
                        {isParking ?
                            <Image style={{width:24, height:24, tintColor: DefaultStyles.colors.primary }}
                                source={require('../../../../../assets/newTick.png')} />
                            : null}
                    </TouchableOpacity>
                    <Apptext style={styles.descTxt}>Dependable</Apptext>
                </View>
              
                <View style={{ marginTop: wp('35%') }}>
                    <FormButton
                        buttonTitle={"Submit"}
                        width={wp('90%')}

                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default Feedback;


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
        // backgroundColor:"red",
        borderRadius: 60
    },
    upldTxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop: wp('3%'),
        color: "#407fb9"

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
        // height:55,
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
    btn: {
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 30,
        width: 103,
        alignSelf: 'center',
        padding: 5,
        marginTop: wp('13%'),

    },
    acntTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        alignSelf: 'center',
        color: DefaultStyles.colors.white,
    }
    ,
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop:wp('3%'),
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 19
    },
    dtls: {
        color: DefaultStyles.colors.black,
        textDecorationLine: 'underline',
    },
    DirectionView1: {
        flexDirection: 'row',
        marginHorizontal:wp('5%')
    },
    radioBtn:{
        marginTop:wp('5%'),
        width:27,
        height:27,
        borderRadius:6,
        borderColor:DefaultStyles.colors.primary,
        borderWidth:2
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginTop:wp('6%'),
        marginHorizontal:wp('5%')
    },


});