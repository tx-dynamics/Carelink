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

const Step1 = ({ navigation }) => {
    const swiperRef = useRef({});
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

    return (
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
                                <View style={{
                                    // backgroundColor: "red",
                                    height: heightPixel(275),
                                    alignItems: "center"
                                }}>
                                    <Image resizeMode='contain' style={{
                                        width: widthPixel(302),
                                        height: heightPixel(250),
                                    }} source={item.image} />
                                </View>
                                <Apptext style={styles.pinkTxt} >{item.title}</Apptext>
                                <Apptext style={styles.lightTxt}>{item.subtitle}</Apptext>
                            </View>
                        )
                    }}
                />
            </KeyboardAwareScrollView>
            <View style={{
                alignSelf: "center",
                bottom: heightPixel(15),
            }}>
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
                    isIndex != 2 ? swiperRef.current._swiper.scrollToIndex({ index: isIndex + 1 }) : navigation.replace("AskRegister")
                }}
                // onPress={() => navigation.navigate("Step2")}
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
    },
    skipDirection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: wp('6%')
    },
    skipTxt: {
        color: DefaultStyles.colors.lightgray,
        marginTop: wp('7%'),
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
    threeDots: {
        marginTop: wp('16%'),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: wp('43%')
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: '#ECECEC',
        borderRadius: 8
    },
    line: {
        height: 8,
        width: 18,
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 8
    },
    underLine: {
        marginTop: wp('25%'),
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderTopColor: '#F1F1F1',
        borderRightColor: DefaultStyles.colors.primary,
        borderLeftColor: "#F1F1F1",
        borderBottomColor: '#F1F1F1',
        padding: 8,
        marginBottom: wp('7%')
    },
    btn: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DefaultStyles.colors.primary,
        alignSelf: 'center',
    },
    box: {
        position: "absolute",
        bottom: heightPixel(6),
        width: widthPixel(83),
        height: widthPixel(83),
        borderRadius: widthPixel(50),
        backgroundColor: colors.primary,
        marginBottom: heightPixel(20),
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    boxImg: {
        width: widthPixel(25),
        height: heightPixel(24),
    }

});