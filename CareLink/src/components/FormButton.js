import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from './Apptext';
import DefaultStyles from "../config/Styles";
import { heightPixel, widthPixel } from '../Constants';
import { appIcons } from '../Constants/Utilities/assets';
import colors from '../config/colors';

const FormButton = ({ width = widthPixel(357), height = heightPixel(56),
  color = '#ffffff',
  buttonTitle, onPress, style,
  borderWidth, borderColor,
  backgroundColor = DefaultStyles.colors.primary,
  borderRadius = 30, fontSize = 21,
  containerStyle,
  pic,
  textStyle,
  disabled,
  ...rest }) => {
  return (
    <TouchableOpacity disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContainer, containerStyle, {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: borderRadius
      }]} {...rest}>
      <Apptext style={[styles.buttonText, textStyle, { color: color, fontSize: fontSize }]} {...rest}>{buttonTitle}</Apptext>
      {pic && <Image resizeMode='contain' source={pic} style={styles.imgStyle} />}
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: "row",

  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    top: heightPixel(2)
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
    marginLeft: widthPixel(10)
  },
});
