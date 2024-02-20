import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { fontPixel, heightPixel, widthPixel } from '../Constants';
import colors from '../config/colors';

const ServiceRoomComp = ({ labelValue, AvailableRooms, BookedRooms,
    placeholderText, iconType, leftIconType, leftImgName, rightImgName,
    onPress, borderRadius = 10, rightOnPress, firstTxt, scndTxt,
    width: width, circleStyle, textStyle,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.inputContainer,
            {
                borderRadius: borderRadius
            }]} >
            <View style={styles.direcView}>
                <View style={styles.lwrView}>
                    <View style={[styles.circle, circleStyle]} >
                        <Apptext style={[styles.nmbr, textStyle]}>{AvailableRooms}</Apptext>
                    </View>
                    <Apptext style={[styles.txt]}>{firstTxt}</Apptext>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default ServiceRoomComp;

const styles = StyleSheet.create({
    direcView: {
        flexDirection: 'row', alignItems: 'center'
    },
    lwrView: {
        width: wp('20%'), alignItems: 'center',
    },
    HumanInput: {
        paddingLeft: wp('2%'),
        width: wp('70%'),
    },
    imgStl: {
        width: 57,
        height: 57,
        borderRadius: 43,
    },
    txtView: {
        justifyContent: 'center',
        width: wp('45%'),
    },
    txtVal: {
        fontFamily: 'poppins-Regular',
        fontSize: 25,
        color: "white"
    },
    btm: {
        marginTop: wp('20%'),

    },
    circle: {
        width: widthPixel(24),
        marginHorizontal: wp('3%'),
        alignItems: 'center',
        justifyContent: 'center',
        height: widthPixel(24),
        borderRadius: 20,
        backgroundColor: "white"
    },
    nmbr: {
        fontFamily: 'Poppins-Regular',
        fontSize: fontPixel(14),
        top: heightPixel(1),
        color: colors.black
        // lineHeight: 35,
    },
    txt: {
        marginTop: wp('1%'),
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: DefaultStyles.colors.white
    },
    inputContainer: {
        width: widthPixel(80),
        marginBottom: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        height: heightPixel(79),
        // marginHorizontal: wp('1%'),
        marginHorizontal: widthPixel(8),
        backgroundColor: DefaultStyles.colors.primary,
        borderBottomColor: "white",
    },
    hrtStl: {
        width: 25,
        height: 25,
        marginRight: wp('10%')
    }
});
