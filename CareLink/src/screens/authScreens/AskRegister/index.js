import React,{useState, useEffect} from 'react';
import {StyleSheet,ScrollView, TouchableOpacity,Image,ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setUser, setUserType } from '../../../redux/actions/authAction';
import IconHeaderComp from '../../../components/IconHeaderComp';

const AskRegister = ({navigation}) => {

    let dispatch = useDispatch();

    return (

        <ScrollView style ={styles.container}>
            
           <IconHeaderComp
           heading={"Let’s get started. Choose an option"}
             /> 
          <View style={styles.pinkBox}>
            <Apptext style={styles.firstTxt}>I want to List my Room</Apptext>
            <Apptext style={styles.scndTxt}>Create your profile and list your rooms now</Apptext>
            <TouchableOpacity
            onPress={() => {
                dispatch(setUserType("ServiceSide"))
                navigation.navigate("ListingOptions")
            }}
            style={styles.btn}>
                <Apptext>Create</Apptext>
            </TouchableOpacity>
          </View>

          <View style={[styles.pinkBox, {marginTop:wp('13%')}]}>
            <Apptext style={[styles.firstTxt]}>I want to register as an agency</Apptext>
            <Apptext style={styles.scndTxt}>Create your profile and register your agency now</Apptext>
            <TouchableOpacity 
            onPress={() => {
                dispatch(setUserType("AgencySide"))
                navigation.navigate("Register")
            }}
            style={styles.btn}>
                <Apptext>Register</Apptext>
            </TouchableOpacity>
          </View>

        </ScrollView>
    )
}

export default AskRegister;


const styles = StyleSheet.create({
    container :{
        backgroundColor : DefaultStyles.colors.white ,
        flex:1,
    },
  
    pinkBox:{   
        marginTop:wp('12%'),
        width:wp('90%'),
        // height:wp('46%'),
        backgroundColor:DefaultStyles.colors.primary,
        borderRadius:10,
        alignSelf:'center',
    },
    firstTxt:{
        color:DefaultStyles.colors.white,
        fontSize:18,
        fontFamily:'Poppins-SemiBold',
        alignSelf:'center',
        marginTop:wp('4%'),
    },
    scndTxt:{
        color:DefaultStyles.colors.white,
        fontSize:14,
        marginTop:13,
        width:wp('80%'),
        // backgroundColor:"red",
        textAlign:'center',
        alignSelf:'center'
    },
    btn:{
        marginBottom:wp('4%'),
        marginTop:wp('6%'),
        width:wp('37%'),
        height:wp('13%'),
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:DefaultStyles.colors.white,
        alignSelf:'center',
    }

  });