import React from "react";
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { getStatusBarHeight } from 'react-native-status-bar-height';


function BackgroundHeader({
  headerLabel,
  backgroundColor,
  backImg,
  leftImgName,
  centerImg,
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
        marginTop:getStatusBarHeight(true),
        ...style,
      }}
    >
      <View style={styles.headerIcons}>
      <TouchableOpacity
        onPress={onPressLeft}
        // style={{ width: wp('6%'), }}
        >
        {isBack ? (
          <Image style={[styles.icons, ]} source={leftImgName} />
        ) : null}
      </TouchableOpacity>
      {/* <View >
        <Image style={styles.imgView} source={centerImg} />
        <Apptext style={styles.headerLabel} >{headerLabel}</Apptext>
      </View> */}
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
    // alignSelf:'center',
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    // justifyContent: "space-between",
    // flexDirection: "row",
    // padding: wp('5%'),

  },
  icons:
  {
    tintColor: "white",
    marginHorizontal:wp(5),
    marginTop:wp(5)
    // position:"absolute",
    // bottom:0,
  },
  imgView: {
    width: '100%'
  },
  headerLabel: {
    fontFamily: 'Poppins-SemiBold',
    color: DefaultStyles.colors.secondary,
    fontSize: 14
  },
  headerIcons:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    // alignItems:'center'
  }
});

export default BackgroundHeader;
