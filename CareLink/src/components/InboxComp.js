import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";

function InboxComp({
    imgName,
    label,
    msg,
    txtDatee,
    contentColor = DefaultStyles.colors.primary,
    onPress,
    style,
}) {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.inboxMainView}>
            <View style={styles.inboxInnerView}>
                <TouchableOpacity style={{width:56, marginLeft:wp('5%')}}>
                    <ImageBackground 
                    imageStyle={{borderRadius:40}}
                    style={styles.inboxImg} source={imgName}>
                      
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{marginLeft:wp('10%')}}>
                <Apptext style={styles.inboxName}>{label}</Apptext>
                </View>
                <Image style={{marginTop:wp('2%'), marginLeft:wp('10%') }} 
                source={require('../../assets/online.png')} />
                <Apptext style={styles.inboxDate}>{txtDatee}</Apptext>
            </View>
            <View style={{flexDirection:'row'}}>
            <Apptext style={[styles.inboxTxt]}>{msg}</Apptext>
            <Apptext style={[styles.inboxTxt, {marginLeft:wp('1%')}]}>{"Now"}</Apptext>
            </View>
            <Apptext style={styles.line}></Apptext>

        </TouchableOpacity>
    );
}


export default InboxComp;

const styles = StyleSheet.create({

 inboxMainView: {
    marginTop: wp('4%'),
    alignSelf: 'center',
    width: wp('92%'),
  },
  inboxInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: wp('3%')
  },
  line:{
    width:wp('90%'),
    height:0.5,
    marginTop:wp('3%'),
    backgroundColor:DefaultStyles.colors.lightgray
  },
  inboxCount: {
    justifyContent: 'center', alignItems: 'center',
    width: 34, height: 34,
    marginLeft: -17,
    marginTop: -10,
    borderRadius: 20,
    backgroundColor: DefaultStyles.colors.secondary
  },
  inboxImg: {
    width: 55, height: 55,
  },
  inboxName: {
    fontSize:19,
    width: wp('65%'),
  },
  inboxDate: {
    width: wp('16%'),
    marginTop: wp('1%'),
    textAlign: 'right'
  },
  inboxTxt: {
    color: DefaultStyles.colors.gray, 
    fontSize:15,
    width: wp('60%'),
    alignSelf: 'center',
    marginLeft:wp('18%'),
    marginTop: -20,
  }


})
