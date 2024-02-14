import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { fontPixel, heightPixel, widthPixel } from "../Constants";
import Styles from "../config/Styles";


function Header({
  headerLabel,
  backgroundColor,
  leftImgName,
  leftImgStyle,
  rightImgStyle,
  centerImg,
  isBack = true,
  onPressLeft,
  onPressRight,
  rightImg,
  style,
}) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        ...style,
      }}>
      <TouchableOpacity
        onPress={onPressLeft}
        style={styles.leftView}>
        {isBack ? (
          <Image resizeMode="contain" style={[styles.leftImgStyle, leftImgStyle]} source={leftImgName} />
        ) : null}
      </TouchableOpacity>
      <View style={styles.hdrView}>
        {centerImg && <Image source={centerImg} />}
        <Apptext style={styles.headerLabel} >{headerLabel}</Apptext>
      </View>
      <TouchableOpacity style={styles.leftView} onPress={onPressRight}>
        {rightImg && <Image resizeMode="contain" source={rightImg} style={[styles.rightImgStyle, rightImgStyle]} />
        }
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    marginTop: getStatusBarHeight(true) + heightPixel(10),
    // marginTop: StatusBar.currentHeight,
    width: "100%",
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: widthPixel(20),
    marginBottom: heightPixel(20)
  },
  headerLabel: {
    fontFamily: 'Poppins-SemiBold',
    color: DefaultStyles.colors.secondary,
    // height: 30,
    // marginTop: -7,
    fontSize: fontPixel(22),
  },
  hdrView: {
    alignItems: 'center',
    width: widthPixel(270),
  },
  leftImgStyle: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
  rightImgStyle: {
    width: widthPixel(38),
    height: widthPixel(38),
  },
  leftView: {
    width: widthPixel(40),
    height: heightPixel(40),
    justifyContent: "center",
  },
});

export default Header;
