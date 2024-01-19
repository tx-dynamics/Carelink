import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { TextInput } from 'react-native-paper';
import { heightPixel, widthPixel } from '../Constants';
import colors from '../config/colors';

const FormInput = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress, title,
    inputMargin = -10,
    placeholderTextColor = '#929292',
    borderWidth = borderWidth,
    borderColor = borderColor,
    borderBottomColor = borderBottomColor,
    backgroundColor = DefaultStyles.colors.white,
    numberOfLines = 1,
    height = heightPixel(48),
    width = widthPixel(374),
    marginTop = marginTop,
    onChangeText,
    rightIconType, ...rest }) => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: "center", }}>
            {leftImgName &&
                <View style={{ justifyContent: 'center' }} >
                    <Image source={leftImgName} />
                </View>
            }
            <View style={[styles.inputContainer,
            {
                backgroundColor: backgroundColor,
                height: height,
                width: width,
                borderBottomColor: borderBottomColor,
            }]}>
                <TextInput
                    label={title}
                    // dense={true}
                    value={labelValue}
                    mode='outlined'
                    underlineColor={"transparent"}
                    activeUnderlineColor={"transparent"}
                    activeOutlineColor={colors.black}
                    onChangeText={onChangeText}
                    numberOfLines={1}
                    // placeholder={title}
                    style={{ backgroundColor: "white" }}
                    placeholderTextColor={placeholderTextColor}
                    {...rest}
                />
                {rightImgName &&
                    <TouchableOpacity onPress={onPress}>
                        <Image style={{
                            position: "absolute", right: 0, marginHorizontal: wp('5%'),
                            marginTop: wp(-11),
                            tintColor: "gray",
                        }} source={rightImgName} />
                    </TouchableOpacity>
                }
            </View>
        </View>

    );
};


export default FormInput;

const styles = StyleSheet.create({
    HumanInput: {
        width: wp('70%'),

    },
    inputContainer: {
        marginTop: wp('11%'),
        // paddingLeft: wp('3%'),
        justifyContent: 'center',
        // borderRadius: 10,
    },
    titleView: {
        alignSelf: 'flex-start',
        // marginTop: -10

    },
    titleTxt: {
        fontSize: 16,
        backgroundColor: DefaultStyles.colors.white,
        height: 22,
        marginLeft: wp('2%'),
        textAlign: 'left',
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular'
    }
});
