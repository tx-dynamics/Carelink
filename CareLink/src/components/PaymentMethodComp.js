import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { heightPixel, widthPixel } from '../Constants';

const PaymentMethodComp = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress, borderRadius = 10, rightOnPress,
    rightIconType, ...rest }) => {
    return (
        <Pressable onPress={rightOnPress}
            // onPress={onPress}
            style={[styles.inputContainer, { borderRadius: borderRadius }]} >
            <View style={styles.direcView}>
                <View style={styles.imgView}>
                    <Image resizeMode='contain'
                        source={leftImgName}
                        style={styles.leftIconStyle}
                    />
                </View>
                <View style={styles.txtView}>
                    <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                </View>
                <View >
                    <Image resizeMode='contain'
                        style={styles.hrtStl}
                        source={rightImgName} />
                </View>
            </View>
        </Pressable>
    );
};

export default PaymentMethodComp;

const styles = StyleSheet.create({
    direcView: {
        flexDirection: 'row', alignItems: 'center'
    },
    inputContainer: {
        width: widthPixel(375),
        marginBottom: wp('5%'),
        alignSelf: 'center',
        height: heightPixel(85),
        justifyContent: 'center',
        padding: wp('2%'),
        paddingLeft: wp('4%'),
        backgroundColor: DefaultStyles.colors.primary,
        borderBottomColor: "white",

    },
    imgView: {
        width: widthPixel(47),
        height: widthPixel(47),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DefaultStyles.colors.white
    },
    txtView: {
        justifyContent: 'center',
        marginHorizontal: wp('3%'),
        width: wp('50%'),
    },
    txtVal: {
        fontFamily: 'Poppins-Regular',
        fontSize: wp('4%'),
        color: DefaultStyles.colors.white
    },

    hrtStl: {
        width: widthPixel(50),
        height: widthPixel(50),
        marginRight: wp('10%')
    },
    leftIconStyle: {
        width: widthPixel(30),
        height: widthPixel(30)
    },
});
