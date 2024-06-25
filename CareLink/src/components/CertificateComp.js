import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultStyles from '../config/Styles';
import Apptext from './Apptext';

const CertificateComp = ({
  btnTxt,
  price,
  plan,
  desc,
  onPress,
  borderRadius = 10,
  height = wp('35%'),
  rightIconType,
  disabled,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.inputContainer,
        {
          borderRadius: borderRadius,
          height: height,
        },
      ]}>
      <View style={styles.yellowView}>
        <View style={styles.marignView}>
          <Apptext style={styles.priceTxt}>
            {price}
            <Apptext
              style={[
                styles.priceTxt,
                {
                  fontSize: 22,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: 'bold',
                },
              ]}>
              {plan}
            </Apptext>{' '}
          </Apptext>
          <Apptext style={styles.descTxt}>{desc}</Apptext>
        </View>
        <View style={styles.blackView}>
          <View style={styles.sbsView}>
            <Apptext style={styles.sbsTxt}>{btnTxt}</Apptext>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CertificateComp;

const styles = StyleSheet.create({
  inputContainer: {
    width: wp('90%'),
    marginBottom: wp('3%'),
    alignSelf: 'center',
    marginTop: wp('8%'),
    justifyContent: 'center',
    backgroundColor: DefaultStyles.colors.primary,
    borderBottomColor: 'white',
  },
  blackView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: wp('2%'),
    marginTop: 5,
  },
  yellowView: {
    width: wp('82%'),
    borderRadius: 10,
    height: wp('30%'),
    borderWidth: 2,
    borderColor: DefaultStyles.colors.yellow,
    alignSelf: 'center',
  },
  sbsView: {
    width: 114,
    height: 32,
    backgroundColor: '#001930',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sbsTxt: {
    color: DefaultStyles.colors.white,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  marignView: {
    marginHorizontal: wp('3%'),
    marginTop: 5,
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
    lineHeight: 23,
  },
});
