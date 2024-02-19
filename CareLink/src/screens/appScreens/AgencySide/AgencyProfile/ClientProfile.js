import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Header from '../../../../components/Header';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants';
import ProfileTopComp from '../../../../components/ProfileTopComp/ProfileTopComp';
import ImageViewZoomComp from '../../../../components/ImageViewZoomComp/ImageViewZoomComp';
import colors from '../../../../config/colors';

const ClientProfile = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const images = [{
        // Simplest usage.
        // url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

        // width: number
        // height: number
        // Optional, if you know the image size, you can set the optimization performance

        // You can pass props to <Image />.
        props: {
            source: appIcons.homePic
            // headers: ...
        }
    }, {
        url: '',
        props: {
            // Or you can set source directory.
            source: appIcons.license
        }
    }, {
        url: '',
        props: {
            // Or you can set source directory.
            source: appIcons.certificate
        }
    }]
    return (
        <View style={styles.container}>
            <Header
                leftImgName={appIcons.headerBack}
                rightImg={appIcons.messageIcon}
                onPressLeft={() => navigation.goBack()}
                headerLabel={"Service Provider Profile"}
                rightImgStyle={styles.rightImgStyle}
                onPressRight={() => navigation.navigate(routes.messages)}
            />
            <ProfileTopComp name={"James Clear"} pic={appIcons.dummyPic1} memberDuration={"October 2023"} />
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={{ color: colors.primary, alignSelf: "center", fontSize: fontPixel(14), textDecorationLine: "underline", marginTop: heightPixel(20) }}>View Documents</Text>
            </TouchableOpacity>
            <ImageViewZoomComp
                data={images}
                visible={visible}
                onSwipeDown={() => setVisible(false)}
                onRequestClose={() => setVisible(false)}
            />
        </View>
    )
}

export default ClientProfile;

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
    jmsTxt: {
        marginTop: wp('6%'),
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    },
    dcTxt: {
        fontFamily: 'Poppins-Regular',
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
    acntTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        marginTop: wp('5%'),
        alignSelf: 'center',
        color: DefaultStyles.colors.primary,
        textDecorationLine: 'underline'
    },
    // leftImgStyle: {
    //     width: widthPixel(23),
    //     height: heightPixel(16),
    // },
    rightImgStyle: {
        width: widthPixel(32),
        height: widthPixel(32),
    },




});