import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, Platform } from "react-native";
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


function ChatHeader({
  headerLabel,
  backgroundColor,
  leftImgName,
  leftImgStyle,
  isBack = true,
  onPressLeft,
  onPressRight,
  rightText,
  rightView,
  leftViewStyle,
}) {
  return (
    <View style={[styles.container,]}>
        <View style={{width:widthPixel(140)}}>
      <TouchableOpacity
        onPress={onPressLeft}
        style={[styles.leftView, leftViewStyle]}>
        {isBack ? (
          <Image resizeMode="contain" style={[styles.leftImgStyle, leftImgStyle]} source={leftImgName} />
        ) : null}
      </TouchableOpacity>
        </View>
      <View style={styles.hdrView}>
        <Apptext style={styles.headerLabel} >{headerLabel}</Apptext>
      </View>
      <View style={styles.rightView}>{rightView &&
      <TouchableOpacity onPress={onPressRight} style={styles.RcvdView}>
                    <Apptext style={styles.cntTxt}> {rightText}</Apptext>
      </TouchableOpacity>
      }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    marginTop: Platform.OS==="android"? StatusBar.currentHeight + heightPixel(10): null,
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
    // width: widthPixel(270),
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
  RcvdView: {
    // top: StatusBar.currentHeight + heightPixel(18),
    // position: "absolute",
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(1),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: DefaultStyles.colors.primary,
    borderRadius: 5,
},
cntTxt: {
    fontSize: 12, color: DefaultStyles.colors.white, textAlign: 'center'
},
rightView:{
    width:widthPixel(140),
alignItems:"flex-end"
},
});

export default ChatHeader;
