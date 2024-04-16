import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const PlansComp = ({ btnTxt, price, plan, desc,
    onPress, borderRadius = 10, height = wp('35%'),
    rightIconType, ...rest }) => {
    return (
        <Pressable onPress={onPress}
            style={[styles.inputContainer,
            {
                borderRadius: borderRadius,
                height: height
            }]}>

            <View style={styles.yellowView} >
                <View style={styles.blackView}>
                    <View style={styles.sbsView} >
                        <Apptext style={styles.sbsTxt}>{btnTxt}</Apptext>
                    </View>
                </View>
                <View style={styles.marignView} >
                    <Apptext style={styles.priceTxt} >{price}<Apptext style={[styles.priceTxt, { fontSize: 17, fontFamily: 'Poppins-Regular' }]}>{plan}</Apptext> </Apptext>
                    <Apptext style={styles.descTxt} >{desc}</Apptext>
                </View>
            </View>

        </Pressable>

    );
};

export default PlansComp;

const styles = StyleSheet.create({
    inputContainer: {
        width: wp('90%'),
        marginBottom: wp('3%'),
        alignSelf: 'center',
        marginTop: wp('8%'),
        justifyContent: 'center',
        backgroundColor: DefaultStyles.colors.primary,
        borderBottomColor: "white",
    },
    blackView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: wp('2%'),
        marginTop: -20
    },
    yellowView: {
        width: wp('82%'),
        borderRadius: 10,
        height: wp('30%'),
        borderWidth: 2,
        borderColor: DefaultStyles.colors.yellow,
        alignSelf: 'center'
    },
    sbsView: {
        width: 114,
        height: 32,
        backgroundColor: "#001930",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sbsTxt: {
        color: DefaultStyles.colors.white,
        fontFamily: 'Poppins-Regular',
        fontSize: 15
    },
    marignView: {
        marginHorizontal: wp('3%')
    },
    priceTxt: {
        color: DefaultStyles.colors.white,
        fontFamily: 'Poppins-SemiBold',
        fontSize: wp('6%'),
    },
    descTxt: {
        color: DefaultStyles.colors.white,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('3.5%'),
        lineHeight: 23
    }
});
