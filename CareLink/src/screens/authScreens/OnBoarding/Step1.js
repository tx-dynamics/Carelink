import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView, ActivityIndicator, Text, View, StatusBar } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import { appIcons } from '../../../Constants/Utilities/assets';
import { heightPixel, widthPixel } from '../../../Constants';
import colors from '../../../config/colors';
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DotComponent from '../../../components/DotComponent/DotComponent';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import { userType } from '../../../redux/Slices/splashSlice'
const Step1 = ({ navigation }) => {
    const swiperRef = useRef({});
    const user = useSelector((state) => state.splash.value)
    const dispatch = useDispatch()
    const [isIndex, setIndex] = useState(0)
    const [isProgress, setProgress] = useState(.33)
    const onBoardingData = [
        {
            id: 1,
            title: "Quick & Easy Services",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies viverra congue platea fermentum volutpat eget porta facilisis.",
            image: appIcons.onBoarding1,
        },
        {
            id: 2,
            title: "List your home with us",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies viverra congue platea fermentum volutpat eget porta facilisis.",
            image: appIcons.onBoarding2,
        },
        {
            id: 3,
            title: "List your extra rooms ",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies viverra congue platea fermentum volutpat eget porta facilisis.",
            image: appIcons.onBoarding3,
        },
    ]
    const onPressButton = () => {
        dispatch(userType("ServiceSide"))
        // dispatch(setUser(true))
        navigation.replace("AskRegister")
    }
    return (
        console.log(user),
        <View style={styles.container}>
            <AppStatusbar />
            <TouchableOpacity style={styles.skipDirection}
                onPress={() => navigation.replace("AskRegister")}
            >
                <Apptext style={styles.skipTxt}>Skip</Apptext>
            </TouchableOpacity>
            <KeyboardAwareScrollView>
                <SwiperFlatList
                    ref={(component) => { swiperRef.current._swiper = component }}
                    scrollEnabled={false}
                    onChangeIndex={(index) => [setIndex(index.index)]}
                    showPagination
                    mode
                    PaginationComponent={(value, index) => <DotComponent data={onBoardingData} isIndex={isIndex} />}
                    data={onBoardingData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.boxView} >
                                <View style={styles.imgView}>
                                    <Image resizeMode='contain' style={styles.imgStyle} source={item.image} />
                                </View>
                                <Apptext style={styles.pinkTxt} >{item.title}</Apptext>
                                <Apptext style={styles.lightTxt}>{item.subtitle}</Apptext>
                            </View>
                        )
                    }}
                />
            </KeyboardAwareScrollView>
            <View style={styles.bottomView}>
                <Progress.Circle
                    thickness={2}
                    borderWidth={0}
                    progress={isProgress}
                    color={colors.primary}
                    size={90}
                    strokeCap={"butt"}
                    unfilledColor={colors.dotUnselected}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    setProgress(isProgress + .34)
                    isIndex != 2 ? swiperRef.current._swiper.scrollToIndex({ index: isIndex + 1 }) : onPressButton()
                }}
                style={styles.box}>
                <Image style={styles.boxImg}
                    source={appIcons.forward} />
            </TouchableOpacity>
        </View>
    )
}

export default Step1;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        // paddingBottom: heightPixel(10)
    },
    skipDirection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: wp('6%')
    },
    skipTxt: {
        color: DefaultStyles.colors.lightgray,
        marginTop: StatusBar.currentHeight + heightPixel(10),
    },
    imgView: {
        height: heightPixel(275),
        alignItems: "center"
    },
    imgStyle: {
        width: widthPixel(302),
        height: heightPixel(250),
    },
    boxView: {
        alignItems: "center",
        alignSelf: 'center',
        width: wp("100%"),
        marginTop: heightPixel(30),
    },
    pinkTxt: {
        paddingHorizontal: widthPixel(10),
        // marginTop: 25,
        alignSelf: 'center',
        color: DefaultStyles.colors.primary,
        fontFamily: 'Poppins-SemiBold',
        fontSize: wp('8%')
    },
    lightTxt: {
        paddingHorizontal: widthPixel(10),
        marginTop: wp('1%'),
        color: DefaultStyles.colors.lightgray,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 15
    },
    box: {
        position: "absolute",
        bottom: heightPixel(6),
        width: widthPixel(83),
        height: widthPixel(83),
        borderRadius: widthPixel(50),
        backgroundColor: colors.primary,
        marginBottom: heightPixel(25),
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    boxImg: {
        width: widthPixel(25),
        height: heightPixel(24),
    },
    bottomView: {
        alignSelf: "center",
        bottom: heightPixel(20),
    },

});