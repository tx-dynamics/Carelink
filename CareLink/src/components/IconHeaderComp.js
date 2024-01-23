import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { heightPixel, widthPixel } from '../Constants';


function IconHeaderComp({ heading, imgName, onPress, style, ...rest }) {

    return (
        <View style={{ marginTop: getStatusBarHeight(true), }}>
            <TouchableOpacity style={styles.subView} onPress={onPress} >
                {imgName &&
                    <Image resizeMode='contain' style={styles.imgStl}
                        source={imgName} />
                }
            </TouchableOpacity>
            <Apptext style={[styles.createTxt, { ...style }]}>{heading}</Apptext>
        </View>
    );
};

export default IconHeaderComp;

const styles = StyleSheet.create({
    createTxt: {
        marginTop: wp('6%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        paddingHorizontal: widthPixel(20),
        // marginHorizontal: wp('5%')
    },
    subView: {
        height: heightPixel(17),
    },
    imgStl: {
        width: widthPixel(18),
        height: heightPixel(17),
        paddingHorizontal: widthPixel(30),
        // marginHorizontal: wp('5%'), 
        marginTop: 18
    }
});
