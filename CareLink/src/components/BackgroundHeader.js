import React from "react";
import { View, StyleSheet, Image, ImageBackground,TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";

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
    resizeMode='contain'
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        ...style,
      }}
    >
     
      <TouchableOpacity 
      onPress={onPressLeft} 
      style={{width:wp('6%'), marginTop:-160}}>
      {isBack ? (
        <Image style={{tintColor:"white"}} source={leftImgName} />
      ) : null}
      </TouchableOpacity>
      <View>
      <Image source={centerImg} />
      <Apptext style={styles.headerLabel} >{headerLabel}</Apptext>
      </View>
      <TouchableOpacity onPress={onPressRight}>
        <Image style={{marginTop:-100, tintColor:"white" }} source={rightImg} />
      </TouchableOpacity>


    </ImageBackground>
  );
}
const styles = StyleSheet.create({
 
  container: {
    height: 240,
    width: wp("100%"),
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: wp('5%'),
  
  },
  headerLabel:{
    fontFamily:'Poppins-SemiBold',
    color:DefaultStyles.colors.secondary,
    fontSize:14
  }
});

export default BackgroundHeader;
