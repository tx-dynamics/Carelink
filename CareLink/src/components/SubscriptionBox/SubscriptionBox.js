import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontPixel, heightPixel, widthPixel} from '../../Constants';
import colors from '../../config/colors';
import {fonts} from '../../Constants/Fonts';

const SubscriptionBox = ({onPress, title, count, subtitle, rightText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>
          {count} {subtitle}
        </Text>
      </View>
      <Text style={styles.rightText}>{rightText}</Text>
    </TouchableOpacity>
  );
};

export default SubscriptionBox;

const styles = StyleSheet.create({
  container: {
    width: widthPixel(374),
    height: heightPixel(77),
    alignSelf: 'center',
    borderRadius: widthPixel(10),
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPixel(20),
    marginBottom: heightPixel(20),
  },
  titleText: {
    fontSize: fontPixel(19),
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.white,
  },
  subtitleText: {
    fontSize: fontPixel(19),
    fontFamily: fonts.Poppins_Light,
    color: colors.white,
  },
  rightText: {
    textDecorationLine: 'underline',
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Light,
    color: colors.white,
  },
});
