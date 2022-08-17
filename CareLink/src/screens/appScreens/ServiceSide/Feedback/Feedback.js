import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';

const Feedback = ({ navigation }) => {
    const [isParking, setParking] = useState(false)
    const [isKitchen, setKitchen] = useState(false)
    const [isDependable, setDependable] = useState(false)

    return (
        <View style={styles.container}>
                <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Submit a feedback to your hired agency"}
                style={styles.rms}
            />
                <View style={styles.txtView}>
                    <Apptext style={[styles.rms1]} >Click to write: </Apptext>
                </View>
                <View style={{ marginTop: -25 }} >
                    <FormInput
                        title={"Feedback"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                    />
                </View>
                <View style={[styles.DirectionView1, { marginTop:wp('8%')}]}>
                    <TouchableOpacity
                        onPress={() => {
                            setKitchen(!isKitchen)
                        }}
                        style={styles.radioBtn}>
                        {isKitchen ?
                            <Image style={styles.imgStl}
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
                            <Image style={styles.imgStl}
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
                            <Image style={styles.imgStl}
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
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 19
    },
    rms1:{
        fontSize: 19,
        fontFamily:'Poppins-Medium', 
        marginTop: wp('8%')
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
    imgStl:{
        width:24, height:24, tintColor: DefaultStyles.colors.primary 
    }

});