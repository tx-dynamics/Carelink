import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { fontPixel, heightPixel, widthPixel } from '../Constants';
import { fonts } from '../Constants/Fonts';
import colors from '../config/colors';


function IconHeaderComp({ heading, imgName, onPress, title, style, ...rest }) {
    return (
        <View style={styles.container}>
            <View style={styles.rowView}>
                <View style={styles.leftView}>
                    <TouchableOpacity style={styles.subView} onPress={onPress} >
                        {imgName && <Image resizeMode='contain' style={styles.imgStl} source={imgName} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={styles.rightView}>
                </View>
            </View>
            <Apptext style={[styles.createTxt, { ...style }]}>{heading}</Apptext>
        </View>
    );
};

export default IconHeaderComp;

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(true) + heightPixel(10),
    },
    rowView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: widthPixel(10),
    },
    leftView: {
        width: widthPixel(50),
        justifyContent: "center",
        height: heightPixel(40),
        alignItems: "center"
    },
    titleView: {
        alignItems: "center"
    },
    titleText: {
        fontSize: fontPixel(23),
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.black
    },
    rightView: {
        width: widthPixel(50),
        height: widthPixel(10),
    },
    createTxt: {
        marginTop: heightPixel(10),
        color: DefaultStyles.colors.black,
        fontFamily: fonts.Poppins_Regular,
        fontSize: wp('6%'),
        paddingHorizontal: widthPixel(20),
    },
    subView: {
    },
    imgStl: {
        width: widthPixel(18),
        height: heightPixel(17),
    }
});
