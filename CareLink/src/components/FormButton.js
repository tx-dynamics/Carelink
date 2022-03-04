import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from './Apptext';
import DefaultStyles from "../config/Styles";

  const FormButton = ({width = wp('80%'), height=wp('15%'),
   buttonTitle,onPress, style,
   borderRadius=30, fontSize= 21,
   ...rest}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.buttonContainer, {width:width, height:height,borderRadius:borderRadius}]} {...rest}>
    
      <Apptext style={[styles.buttonText, {fontSize: fontSize}]}>{buttonTitle}</Apptext>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom:wp('5%'),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: DefaultStyles.colors.primary,
    alignSelf:'center'
  },
  buttonText: {
    color: '#ffffff',
    fontFamily:'Poppins-Regular'
  },
});
