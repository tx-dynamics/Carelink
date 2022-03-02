import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DefaultStyles from "../../config/Styles";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "../../components/Apptext";


function DrawerContent({ navigation, userImg, username, userEmail }) {
  const backimg = require("../../../assets/arrow-back.png");
  const [back1, setback1] = useState();
  const [back2, setback2] = useState();
  const [back3, setback3] = useState();
  const [back4, setback4] = useState();
  const [back5, setback5] = useState();
  const [back6, setback6] = useState();
  const [back7, setback7] = useState();
  const [back8, setback8] = useState();
  const [back9, setback9] = useState();
  const [back10, setback10] = useState();
  const [back11, setback11] = useState();
  const [back12, setback12] = useState();

  return (
  <View style={styles.container} >
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 0,
    flex:1,
    backgroundColor:DefaultStyles.colors.secondary,
    // paddingTop: -50
},
bck:{
    marginHorizontal:wp('4%'),
    marginTop:wp('10%')
},
logo:{
    marginTop:wp('8%'),marginHorizontal:wp('15%'),
},
DirectionView:{
    flexDirection:'row'
},
threeItems:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:wp('5%'),
    marginTop:wp('17%')
},
golBox:{
    width:52, height:52,
    // backgroundColor:"red",
    borderWidth:2,
    borderColor:"white",
    borderRadius:40,
},
hanaTxt:{
fontSize:14,
color:"white",
width:wp('42%'),
// backgroundColor:'red',
fontFamily:'Poppins-SemiBold'
},
add:{
    width:22,
    height:22,
    borderRadius:4,
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center'
},
listView:{
    flexDirection:'row',
    width:wp('68%'),
    height:wp('11%'),
    backgroundColor:"white",
    borderRadius:8,
    marginHorizontal:wp('5%'),
    marginTop:wp('2%'),
    alignItems:'center',
    // justifyContent:'center'
    // alignSelf:'center'
},
blueBox:{
 height:wp('6%'),
 width:wp('6%'),
 alignItems:'center',
 justifyContent:'center',
 marginHorizontal:wp('2%'),
 backgroundColor:DefaultStyles.colors.secondary,
 borderRadius:4   
},
innerTxt:{
    fontFamily:'Poppins-Regular',
    fontSize:13,
    marginTop:wp('1%'),
    width:wp('52%'),
    color:DefaultStyles.colors.secondary
},
logoutBox:{
    marginHorizontal:wp('7%'),
    marginBottom:wp('5%'),
    backgroundColor:"white",
    height:28, width:28,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
},
logoutTxt:{
    fontFamily:'Poppins-Regular',
    fontSize:18,
    color:DefaultStyles.colors.white,
}

});

export default DrawerContent;
