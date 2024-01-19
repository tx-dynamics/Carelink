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
import { heightPixel, widthPixel } from '../../../Constants';

const PaymentDone = ({ navigation }) => {
    let dispatch = useDispatch()
    const usertype = useSelector((state) => state.auth.usertype)
    const user = useSelector((state) => state.auth.user)
    return (
        <View style={styles.container}>
            <View>
                <IconHeaderComp
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                />
                <View style={styles.centerView}>
                    <Image resizeMode='contain'
                        style={{
                            width: widthPixel(96),
                            height: widthPixel(96),
                        }}
                        source={require('../../../../assets/bigCircleTick.png')} />
                    <Apptext style={styles.doneTxt}>Payment done</Apptext>
                </View>
                {usertype === "ServiceSide" ?
                    <View style={[styles.txtView, { marginTop: wp('4%') }]} >
                        <Apptext style={styles.roomsTxt}> Your Rooms  </Apptext>
                        <Apptext style={styles.roomsTxt}> Successfully Registerd </Apptext>
                    </View> :
                    <View style={[styles.txtView, { marginTop: wp('4%') }]} >
                        <Apptext style={styles.roomsTxt}> Congratulations </Apptext>
                        <Apptext style={styles.roomsTxt}> You’re All Set </Apptext>
                    </View>
                }
                <View style={styles.txtView} >
                    <Apptext style={styles.submitTxt}> This is Sample Text. Please Provide Original Text to be pasted here  </Apptext>
                </View>
            </View>
            <FormButton
                buttonTitle={"Continue"}
                onPress={() => dispatch(setUser(true))}
            />
        </View>
    )
}

export default PaymentDone;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20),
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