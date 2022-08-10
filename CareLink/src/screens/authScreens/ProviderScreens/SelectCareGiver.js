import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import DefaultStyles from "../../../config/Styles";
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SelectCareGiver = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <IconHeaderComp
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
        heading={"Find the right caregiver"}
      />
      <TouchableOpacity style={styles.inputContainer}>
        <View style={styles.cutView}>
          <Apptext>Who need care?</Apptext>
        </View>
        <View style={styles.insideDropDowm}>
          <Apptext style={styles.descTxt} >Mother</Apptext>
          <Image style={{ marginHorizontal: wp('2%'), marginTop: -3 }}
            source={require('../../../../assets/arrowDown.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.inputContainer, {marginTop: wp('9%')}]}>
        <View style={styles.cutView}>
          <Apptext>Where does she need care?</Apptext>
        </View>
        <View style={styles.insideDropDowm}>
          <Apptext style={[styles.descTxt, {color:"#00000040"}]} >Enter her zip code or city</Apptext>
          <Image style={{ marginHorizontal: wp('2%'), marginTop: -3 }}
            source={require('../../../../assets/arrowDown.png')} />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}>
        <FormButton
          buttonTitle={"Next"}
          width={wp('90%')}
          onPress={() => navigation.navigate("ActivitySelect")}
        />
      </View>
    </View>
  )
}
export default SelectCareGiver;
const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  inputContainer: {
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 10,
    // alignItems:'center',
    justifyContent: 'center',
    height: 48,
    marginTop: wp('12%'),
    borderWidth: 1,
    borderColor: DefaultStyles.colors.black
  },
  insideDropDowm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:"red",
    marginTop: wp('2%'),
    marginHorizontal: wp('5%'),
  },
  cutView: {
    // width: "auto",
    marginTop: -20,
    marginHorizontal: wp('5%'),
    height: 20,
    backgroundColor: "white",
    alignSelf: "flex-start"
  },
  descTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16
  },
});