import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { getStatusBarHeight } from 'react-native-status-bar-height';


function IconHeaderComp({ heading, imgName, onPress, style, ...rest }) {

    return (
        <View style={{ marginTop: getStatusBarHeight(true), }}>
            <TouchableOpacity onPress={onPress} >
                <Image style={styles.imgStl}
                    source={imgName} />
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
        marginHorizontal: wp('5%')
    },
    imgStl: {
        marginHorizontal: wp('5%'), marginTop: 18
    }
});
