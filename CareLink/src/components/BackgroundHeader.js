import React from "react";
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
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
        // marginTop: getStatusBarHeight(true),
        ...style,
      }}
    >
      <View style={styles.headerIcons}>
        <TouchableOpacity
          onPress={onPressLeft}
        >
          {leftImgName && <Image style={[styles.icons,]} source={leftImgName} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressRight}>
          {rightImg && <Image style={[styles.icons,]} source={rightImg} />}
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({

  container: {
    height: heightPixel(276),
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
    marginTop: getStatusBarHeight(true)+ heightPixel(20)
  }
});

export default BackgroundHeader;
