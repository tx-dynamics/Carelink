import React from "react";
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import DefaultStyles from "../config/Styles";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { heightPixel, widthPixel } from "../Constants";


function BackgroundHeader({
  backgroundColor,
  backImg,
  leftImgName,
  isBack = true,
  contentColor = DefaultStyles.colors.secondary,
  onPressLeft,
  onPressRight,
  rightImg,
  style,
}) {
  return (
    <ImageBackground
      source={backImg}
      resizeMode='cover'
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        marginTop: getStatusBarHeight(true),
        ...style,
      }}
    >
      <View style={styles.headerIcons}>
        <TouchableOpacity
          onPress={onPressLeft}
        >
          {isBack ? (
            <Image style={[styles.icons,]} source={leftImgName} />
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressRight}>
          <Image style={[styles.icons,]} source={rightImg} />
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({

  container: {
    height: wp('67%'),
    width: "100%",
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    alignItems: "center",

  },
  icons:
  {
    tintColor: "white",
    marginHorizontal: widthPixel(15),
    width: widthPixel(30),
    height: widthPixel(30),
    marginTop: wp(5)
  },
  imgView: {
    width: '100%'
  },
  headerLabel: {
    fontFamily: 'Poppins-SemiBold',
    color: DefaultStyles.colors.secondary,
    fontSize: 14
  },
  headerIcons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: heightPixel(20)
  }
});

export default BackgroundHeader;
