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
import { fontPixel, heightPixel, routes, widthPixel } from '../../../Constants';
import { appIcons } from '../../../Constants/Utilities/assets';
import { fonts } from '../../../Constants/Fonts';
import { fromProfile } from '../../../redux/Slices/appSlice';
import { SuccessSnackbar } from '../../../Constants/Utilities/assets/Snakbar';
import { userSave } from '../../../redux/Slices/splashSlice';

const PaymentDone = ({ navigation }) => {
    const dispatch = useDispatch()
    const usertype = useSelector((state) => state.splash.userType)
    const user = useSelector((state) => state.splash.value)
    const isFromProfile = useSelector((state) => state.appSlice.fromProfile)
    const onPressContinue = () => {
        if (isFromProfile) {
            navigation.navigate("GeneralNavigator")
            dispatch(fromProfile(false))
        }
        else {
            if (usertype == "AgencySide") {
                dispatch(userSave(true))
            }
            else { navigation.navigate(routes.listingOptions) }
        }
    }
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <View style={styles.centerView}>
                    <Image resizeMode='contain'
                        style={{
                            width: widthPixel(96),
                            height: widthPixel(96),
                        }}
                        source={appIcons.successTick} />
                    <Apptext style={styles.doneTxt}>Payment done</Apptext>
                </View>
                {usertype === "ServiceSide" ?
                    <View style={[styles.txtView, { marginTop: heightPixel(12) }]} >
                    </View> :
                    <View style={[styles.txtView, { marginTop: wp('4%'), alignItems: "center" }]} >
                        <Apptext style={styles.roomsTxt}> Congratulations </Apptext>
                        <Apptext style={styles.roomsTxt}> You’re All Set </Apptext>
                    </View>
                }
                <View style={styles.txtView} >
                    <Apptext style={styles.submitTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mauris at at nullam. Risus enim tellus pretium faucibus.</Apptext>
                </View>
            </View>
            <FormButton
                buttonTitle={"Continue"}
                onPress={onPressContinue}
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
        marginTop: heightPixel(20),
        color: '#00da09'
    },
    centerView: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    txtView: {
        paddingHorizontal: widthPixel(20),
    },
    roomsTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24
    },
    submitTxt: {
        fontSize: fontPixel(14),
        textAlign: 'center',
        fontFamily: fonts.Poppins_Regular,

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