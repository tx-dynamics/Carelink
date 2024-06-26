import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { widthPixel } from '../Constants';
import colors from '../config/colors';

const ProposalComp = ({ labelValue, when, fors, hourly, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    showHrt, showProposals, name, location, rightImg = require('../../assets/heart.png'),
    onPress, borderRadius = 10, rightOnPress, description,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.inputContainer, { borderRadius: borderRadius }]}>
            {/* Propsal Starts Here */}
            <View style={styles.direcView}>
                <View>
                    <Image style={styles.imgView}
                        source={require('../../assets/photo.png')} />
                </View>
                <View>
                    <Apptext numberOfLines={1} style={styles.jamesTxt} >{name}</Apptext>
                    {/* <Apptext numberOfLines={1} style={styles.locTxt} >{location}</Apptext> */}
                    <Apptext numberOfLines={1} style={styles.descTxt} >Received: <Text style={{ color: colors.gray }}>{description}</Text></Apptext>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProposalComp;

const styles = StyleSheet.create({
    direcView: {
        // alignItems: "center",
        flexDirection: 'row',
        marginTop: wp('1%')
    },
    HumanInput: {
        paddingLeft: wp('2%'),
        width: wp('70%'),

    },
    imgView: {
        width: 94,
        marginHorizontal: wp('4%'),
        borderRadius: 10,
        height: 96,
    },
    jamesTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 19,
        width: wp('55%'),
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
        // marginTop:wp('4%'),
        // backgroundColor:"red"
    },
    txtVal: {
        fontFamily: 'poppins-Regular',
        fontSize: 18,
        marginTop: wp('2%')
    },
    lightTxt: {
        fontSize: 8,
        marginTop: wp('4%'),
        color: "lightgray",
    },
    scndTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 11,
        marginTop: wp('1%')
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        borderRadius: 5,
        marginTop: wp('1%')
    },
    inputContainer: {
        width: wp('90%'),
        marginBottom: wp('6%'),
        alignSelf: 'center',
        height: 132,
        padding: wp('4%'),
        paddingLeft: 0,
        backgroundColor: DefaultStyles.colors.white,
        borderBottomColor: "white",
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
    },
    locTxt: {
        width: widthPixel(220),
        // marginLeft: wp('32%'),
        fontSize: 16,
        // marginTop: -60
    },
    descTxt: {
        // marginLeft: wp('32%'),
        fontSize: 16,
        color: colors.gray
    }
});
