import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import { useDispatch, useSelector } from 'react-redux';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { heightPixel, routes } from '../../../Constants';
import { fromProfile } from '../../../redux/Slices/appSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const AgencyMap = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const isFromProfile = useSelector((state) => state.appSlice.fromProfile)
    const dispatch = useDispatch()

    const onPressNext = () => {
        if (usertype == "ServiceSide") {
            navigation.navigate(routes.listingSummary)
        } if (usertype == "AgencySide") {
            if (isFromProfile) {
                navigation.navigate("ProfileNavigator")
                dispatch(fromProfile(false))
            } else {
                navigation.navigate("PaymentPlans")
            }

        }
    }
    return (
        <AppGLobalView style={styles.container}>
            <View>
                <IconHeaderComp
                    title={"Pin Location"}
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                    heading={"Pin your listed room location on the map"}
                />
                <ImageBackground
                    style={styles.imgView}
                    source={require('../../../../assets/map.png')}>
                    <Image style={{ marginTop: wp('18%') }} source={require('../../../../assets/pin-fill.png')} />
                    <TouchableOpacity style={styles.pinkBox} >
                        <Image source={require('../../../../assets/zoom.png')} />
                    </TouchableOpacity>
                </ImageBackground>
                <View>
                    <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Address</Apptext>
                    <Apptext style={[styles.adrs]}>123 street, 11 apartment ,USA,11221</Apptext>
                </View>
            </View>
            <FormButton
                buttonTitle={isFromProfile ? "Update" : "Next"}
                onPress={onPressNext}
            />
        </AppGLobalView>
    )
}

export default AgencyMap;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('5%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('6%')
    },
    imgView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: wp('90%'),
        height: wp('70%'),
        marginTop: wp('5%'),
        alignSelf: 'center',
        borderRadius: 10
    },
    pinkBox: {
        width: 51,
        borderRadius: 8,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('50%'),
        marginHorizontal: wp('5%'),
        backgroundColor: DefaultStyles.colors.primary
    },
    adrs: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginHorizontal: wp('6%'),
        lineHeight: 25

    }
});