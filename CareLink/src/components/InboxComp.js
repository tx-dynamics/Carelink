import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { fontPixel, heightPixel, widthPixel } from "../Constants";
import colors from "../config/colors";
import { appIcons } from "../Constants/Utilities/assets";
import { fonts } from "../Constants/Fonts";

function InboxComp({ onPress, image, label, message, time, online, tintColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.subView}>
        <Image resizeMode="contain" source={image} style={styles.picStyle} />
        <View style={styles.subRowView}>
          <View style={styles.labelRowView}>
            <Text numberOfLines={1} style={styles.labelText}>{label}</Text>
            <Image resizeMode="contain" source={online} style={[styles.onlineImg, { tintColor: tintColor }]} />
          </View>
          <View style={styles.labelRowView}>
            <Text numberOfLines={1} style={styles.messageText}>{message}</Text>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}


export default InboxComp;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: .5,
    borderBottomColor: colors.messageBody,
    marginBottom: heightPixel(10),
    width: widthPixel(374),
    height: heightPixel(85),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: widthPixel(10),
    paddingRight: widthPixel(20),
    alignSelf: "center",
    paddingBottom: heightPixel(10)
  },
  subView: {
    flexDirection: "row",
    alignItems: "center",
  },
  picStyle: {
    width: widthPixel(61),
    height: widthPixel(61),
    borderRadius: widthPixel(40),
  },
  subRowView: {
    marginLeft: widthPixel(10),
    width: "82%"
  },
  labelRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelText: {
    fontSize: fontPixel(19),
    maxWidth: widthPixel(270),
    fontFamily: fonts.Poppins_Regular,
    color: colors.black
  },
  onlineImg: {
    width: widthPixel(12),
    height: widthPixel(12),
  },
  messageText: {
    maxWidth: widthPixel(260),
    fontSize: fontPixel(15),
    fontFamily: fonts.Poppins_Regular,
    color: colors.messageBody
  },
  timeText: {
    fontSize: fontPixel(15),
    fontFamily: fonts.Poppins_Regular,
    color: colors.messageBody
  },
})
