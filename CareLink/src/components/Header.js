import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { getStatusBarHeight } from 'react-native-status-bar-height';


function Header({
  headerLabel,
  backgroundColor,
  leftImgName,
  centerImg,
  isBack = true,
  height = wp("23%"),
  contentColor = DefaultStyles.colors.secondary,
  onPressLeft,
  onPressRight,
  rightImg,
  rightstyle,
  style,
}) {
  return (
    <View
      style={{
        ...styles.container,
        height:height,
        marginTop:getStatusBarHeight(true),
        backgroundColor: backgroundColor,
        ...style,
      }}>
      <TouchableOpacity 
      onPress={onPressLeft} 
      style={{width:wp('6%')}}>
      {isBack ? (
        <Image source={leftImgName} />
      ) : null}
      </TouchableOpacity>
      <View style={styles.hdrView}>
      <Image source={centerImg} />
      <Apptext style={styles.headerLabel} >{headerLabel}</Apptext>
      </View>
      <TouchableOpacity style={{width:wp('6%')}} onPress={onPressRight}>
        <Image source={rightImg} />
      </TouchableOpacity>


    </View>
  );
}
const styles = StyleSheet.create({
 
  container: {
    width: wp("100%"),
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: wp('6%'),
    marginTop:-5
  },
  headerLabel:{
    fontFamily:'Poppins-SemiBold',
    color:DefaultStyles.colors.secondary,
    height:30,
    marginTop:-7,
    fontSize:wp('6%'),
  },
  hdrView:{
    alignItems:'center', width:wp('70%'), height:wp('5%')
  }
});

export default Header;
