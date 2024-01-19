import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { fontPixel, heightPixel, widthPixel } from '../Constants';
import { fonts } from '../Constants/Fonts';
import colors from '../config/colors';

const SelectCardComp = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress, borderRadius = 6, rightOnPress, myStl, cardName,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={myStl ? [styles.inputContainer, {
                borderColor: DefaultStyles.colors.primary,
                borderWidth: 1, borderRadius: borderRadius
            }] : [styles.inputContainer, { borderRadius: borderRadius }]} >

            <View style={styles.direcView}>
                <View style={styles.imgView}>
                    <View style={{
                        alignItems: "center",
                        width: widthPixel(90),
                    }}>
                        <Image resizeMode='contain' style={{
                            width: widthPixel(40),
                            height: widthPixel(40),
                            // marginRight: widthPixel(20)
                        }}
                            source={leftImgName}
                        />
                        <Text style={{
                            fontSize: fontPixel(12),
                            fontFamily: fonts.Poppins_Bold,
                            color: colors.cardTextColor
                        }}>{cardName}</Text>
                    </View>
                    <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                </View>
                {/* <View style={styles.txtView}>
                </View> */}
                {myStl ? <View style={styles.pinkCircle}>
                    <Image resizeMode='contain' style={{
                        width: widthPixel(24),
                        height: widthPixel(24),
                    }}
                        source={rightImgName} />
                </View> : null}
            </View>
        </TouchableOpacity>
    );
};

export default SelectCardComp;

const styles = StyleSheet.create({
    direcView: {
        paddingRight: widthPixel(20),
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        width: widthPixel(343),
        marginBottom: heightPixel(20),
        alignSelf: 'center',
        height: heightPixel(74),
        justifyContent: 'center',
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
    pinkCircle: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 20
    },
    imgView: {
        // width: 46,
        // height: 46,
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: DefaultStyles.colors.white
    },
    txtView: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: wp('52%'),
    },
    txtVal: {
        fontFamily: 'Poppins-Regular',
        fontSize: wp('3%'),
        color: DefaultStyles.colors.black,
        marginLeft: widthPixel(20)
    },
    hrtStl: {
        width: 25,
        height: 25,
        marginRight: wp('10%')
    }
});
