import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { fontPixel, heightPixel, widthPixel } from '../Constants';
import colors from '../config/colors';
import { fonts } from '../Constants/Fonts';
import AvailableFacilityComp from './AvaialableFacilityComp/AvailableFacilityComp';

const ServiceListingComp = ({ containerStyle, labelValue, disabled, when, facilityData, facilty, fors, hourly, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName, showTags = true,
    showHrt, showProposals, name, location, rightImg = require('../../assets/heart.png'),
    onPress, borderRadius = 10, rightOnPress, rightTxt, pic, reviews, detail, rightTexPress,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity disabled={disabled}
            onPress={onPress}
            style={[styles.inputContainer, containerStyle, { borderRadius: borderRadius }]}>

            {/* Propsal Starts Here */}
            {showProposals ? <View style={{ height: 55 }}>
                <View style={styles.direcView}>
                    <View>
                        <Image style={styles.imgView} source={pic} />
                    </View>
                    <View>
                        <Apptext numberOfLines={1} style={styles.jamesTxt}>{name}</Apptext>
                        {reviews && <Apptext numberOfLines={2} style={styles.locTxt} >{"See Reviews"}</Apptext>}
                        {detail && <Apptext numberOfLines={2} style={styles.detailTxt} >{detail}</Apptext>}
                    </View>
                    <TouchableOpacity onPress={rightTexPress}>
                        <Apptext style={styles.jamesTxt1}>{rightTxt}</Apptext>
                    </TouchableOpacity>
                </View>
            </View> : null}
            {/* Propsal Ends Here */}

            {showTags ?
                <View>
                    <View style={styles.txtView}>
                        <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                    </View>
                    {/* <View style={styles.fvTxt}>
                        <Apptext style={styles.scndTxt}>{"For 20 days"}</Apptext>
                    </View> */}
                    <FlatList horizontal style={{
                        alignSelf: "flex-start",
                        marginLeft: widthPixel(20),

                    }} data={facilityData} renderItem={({ item, index }) => <AvailableFacilityComp title={item.title} />} />

                    <View style={{ height: wp('2%') }}></View>
                </View>
                :
                <View style={{ height: wp('2%') }}></View>
            }
        </TouchableOpacity>
    );
};

export default ServiceListingComp;

const styles = StyleSheet.create({
    direcView: {
        flexDirection: 'row',
        marginTop: wp('1%'),
        justifyContent: "space-between",
    },
    locTxt: {
        width: widthPixel(240),
        fontSize: fontPixel(15),
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.black,
        textDecorationLine: "underline"
    },
    detailTxt: {
        width: widthPixel(240),
        fontSize: fontPixel(12),
        fontFamily: fonts.Poppins_Regular,
        color: colors.detailText,
    },
    strImg: {
        marginLeft: 77, height: 15, width: 80
    },
    HumanInput: {
        paddingLeft: wp('2%'),
        width: wp('70%'),

    },
    imgView: {
        width: widthPixel(60),
        marginLeft: widthPixel(20),
        marginRight: widthPixel(10),
        borderRadius: widthPixel(10),
        height: widthPixel(60),
    },
    jamesTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        width: widthPixel(240),
    },
    jamesTxt1: {
        width: wp('58%'),
        // marginLeft: -8,
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        textDecorationLine: 'underline',
    },
    fvTxt: {
        marginHorizontal: wp('5%'), flexDirection: 'row', alignItems: 'center'
    },
    imgStl: {
        width: 57,
        height: 57,
        borderRadius: 43,
    },
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: wp('5%'),
        width: wp('75%'),
        marginTop: wp('3%'),
    },
    txtVal: {
        fontFamily: fonts.Poppins_Medium,
        fontSize: fontPixel(13),
        color: colors.black,
        marginVertical: heightPixel(5)
        // marginTop: wp('2%')
    },
    lightTxt: {
        fontSize: 8,
        marginTop: wp('4%'),
        color: "lightgray",
    },
    scndTxt: {
        fontFamily: fonts.Poppins_Regular,
        fontSize: fontPixel(13),
        marginTop: wp('1%'),
        color: colors.black
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        borderRadius: 5,
        marginTop: wp('1%')
    },
    inputContainer: {
        alignSelf: "center",
        width: widthPixel(374),
        marginBottom: wp('5%'),
        // alignSelf: 'center',
        padding: wp('2%'),
        paddingLeft: 0,
        backgroundColor: DefaultStyles.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    hrtStl: {
        width: 25,
        height: 25,
        marginRight: wp('10%')
    }
});
