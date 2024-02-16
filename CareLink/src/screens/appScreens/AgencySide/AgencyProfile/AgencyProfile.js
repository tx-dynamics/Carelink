import React, { useState, useEffect } from 'react';
import {
    View, TouchableOpacity, FlatList, ActivityIndicator,
    TextInput, Alert, Image, StyleSheet, ScrollView, StatusBar, UIManager, LayoutAnimation, Text,
}
    from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import BackgroundHeader from '../../../../components/BackgroundHeader';
import ReviewsComp from '../../../../components/ReviewsComp';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import colors from '../../../../config/colors';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants';
import { uploadmage } from '../../../../Services/HelpingMethods';
import { fonts } from '../../../../Constants/Fonts';
import { fromProfile } from '../../../../redux/Slices/appSlice';


const Profile = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const dispatch = useDispatch()
    const [isCover, setCover] = useState(null)
    const [isProfile, setProfile] = useState(null)
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);

    const DATA = [
        {
            id: 1,
            name: "Tebasy C.",
            date: "Feb 28th, 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.",
            checks: [
                {
                    mark: true,
                    title: "Would rehire"
                },
                {
                    mark: false,
                    title: "Punctual"
                },
                {
                    mark: true,
                    title: "Dependable"
                },
            ]
        },
        {
            id: 2,
            name: "John Doe",
            date: "Feb 29th, 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.",
            checks: [
                {
                    mark: true,
                    title: "Would rehire"
                },
                {
                    mark: true,
                    title: "Punctual"
                },
                {
                    mark: true,
                    title: "Dependable"
                },
            ]
        },
        {
            id: 3,
            name: "Jack",
            date: "Jan 28th, 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.",
            checks: [
                {
                    mark: false,
                    title: "Would rehire"
                },
                {
                    mark: false,
                    title: "Punctual"
                },
                {
                    mark: true,
                    title: "Dependable"
                },
            ]
        },
        {
            id: 3,
            name: "Jack",
            date: "Jan 28th, 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.",
            checks: [
                {
                    mark: false,
                    title: "Would rehire"
                },
                {
                    mark: true,
                    title: "Punctual"
                },
                {
                    mark: false,
                    title: "Dependable"
                },
            ]
        },
        {
            id: 3,
            name: "Jack",
            date: "Jan 28th, 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.",
            checks: [
                {
                    mark: true,
                    title: "Would rehire"
                },
                {
                    mark: false,
                    title: "Punctual"
                },
                {
                    mark: false,
                    title: "Dependable"
                },
            ]
        },
        {
            id: 3,
            name: "Jack Last",
            date: "Jan 28th, 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor.",
            checks: [
                {
                    mark: false,
                    title: "Would rehire"
                },
                {
                    mark: true,
                    title: "Punctual"
                },
                {
                    mark: true,
                    title: "Dependable"
                },
            ]
        },
    ];
    useFocusEffect(
        React.useCallback(() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            StatusBar.setTranslucent(true)
            StatusBar.setBackgroundColor("transparent")
            return () => {
                StatusBar.setTranslucent(false)
                StatusBar.setBackgroundColor(colors.white)
            };
        }, []),
    );
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent />
            <BackgroundHeader
                onPressRight={() => uploadmage(setCover)}
                backImg={isCover == null ? require('../../../../../assets/back.png') : { uri: isCover }}
                leftImgName={require('../../../../../assets/headerBack.png')}
                rightImg={usertype === "ServiceSide" ? require('../../../../../assets/dots.png') : appIcons.camera}
                onPressLeft={() => navigation.goBack()}
            />
            <View style={styles.whiteView}>
                <View style={styles.imgBox} >
                    <Image style={styles.profileImg} source={isProfile == null ? require('../../../../../assets/photo.png') : { uri: isProfile }} />
                    <TouchableOpacity onPress={() => uploadmage(setProfile)} style={styles.cameraView}>
                        <Image style={styles.camStyle} source={usertype === "ServiceSide" ? require('../../../../../assets/camera.png') : appIcons.camera} />
                    </TouchableOpacity>
                </View>
                <Apptext style={styles.imgTxt} >ABC Rental Agency</Apptext>
                <Apptext style={styles.mngTxt} >Manage 90+ Rental Propoerties in the city</Apptext>
                <Apptext style={[styles.mngTxt, { marginTop: wp('2%') }]} >5+ Years experience</Apptext>
                <TouchableOpacity onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.brochureProfile })}>
                    <Text style={styles.brochureText}>Brochure</Text>
                </TouchableOpacity>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >About</Apptext>
                    <TouchableOpacity onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.agencyBasic, params: { fromProfile: dispatch(fromProfile(true)) } })}>
                        <Apptext style={styles.dtls} >Edit your about</Apptext>
                    </TouchableOpacity>
                </View>
                <View style={styles.paraView}>
                    <Apptext style={styles.para} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat, erat quis commodo facilisis ultricies. Aliquam semper eget dictumst donec elit in.</Apptext>
                </View>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Location</Apptext>
                    <TouchableOpacity onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "AgencyLocation", params: { fromProfile: dispatch(fromProfile(true)) } })}>
                        <Apptext style={styles.dtls} >Edit your Location</Apptext>
                    </TouchableOpacity>
                </View>
                <View style={styles.paraView}>
                    <Apptext style={styles.para} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Apptext>
                </View>
                <Image
                    style={styles.mapImg}
                    source={require('../../../../../assets/profileMao.png')} />
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Reviews</Apptext>
                </View>
                <View style={{ marginTop: heightPixel(10) }}>
                    <FlatList scrollEnabled={false} ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                        ListFooterComponent={() => <View style={{ marginBottom: heightPixel(90) }}></View>}
                        data={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <ReviewsComp disabled data={item.checks}
                                showProposals={true}
                                labelValue={item.desc}
                                name={item.name}
                                location={item.date}
                            />
                        )}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DefaultStyles.colors.white,
    },
    whiteView: {
        width: wp('100%'),
        backgroundColor: "white",
    },
    imgBox: {
        width: widthPixel(164),
        marginTop: wp(-35),
        height: widthPixel(164),
        borderWidth: 0.2,
        borderColor: "lightgray",
        borderRadius: 20,
        alignSelf: 'center'
    },
    profileImg: {
        width: widthPixel(164),
        height: widthPixel(164),
        borderRadius: widthPixel(10)
    },
    cameraView: {
        width: widthPixel(51),
        height: widthPixel(51),
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: heightPixel(-37),
        right: heightPixel(20),
        marginHorizontal: wp('35%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 3,
    },
    camStyle: {
        width: widthPixel(28),
        height: heightPixel(24),
    },
    imgTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: heightPixel(30)
    },
    mngTxt: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        width: wp('95%'),
        marginTop: 5,
        alignSelf: 'center'
    },
    brochureText: {
        marginTop: heightPixel(10),
        textAlign: "center",
        color: colors.primary,
        textDecorationLine: "underline",
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Light,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'),
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    dtls: {
        color: DefaultStyles.colors.black,
        fontSize: 11,
        textDecorationLine: 'underline',
    },
    paraView: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('2%')
    },
    para: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    mapImg: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('8%'),
        borderRadius: 15
    }
});