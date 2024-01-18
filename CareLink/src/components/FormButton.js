import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from './Apptext';
import DefaultStyles from "../config/Styles";
import { heightPixel, widthPixel } from '../Constants';

const FormButton = ({ width = widthPixel(357), height = heightPixel(56),
  color = '#ffffff',
  buttonTitle, onPress, style,
  borderWidth, borderColor,
  backgroundColor = DefaultStyles.colors.primary,
  borderRadius = 30, fontSize = 21,
  containerStyle,
  ...rest }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, containerStyle, {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: borderRadius
      }]} {...rest}>
      <Apptext style={[styles.buttonText, { color: color, fontSize: fontSize }]} {...rest}>{buttonTitle}</Apptext>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins-Regular'
  },
});
