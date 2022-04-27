import React,{useState, useEffect} from 'react';
import {StyleSheet,Image,ActivityIndicator, Text, View } from 'react-native';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Step1")
        }, 2000);
    }, []);

    return (

        <View style ={styles.container}>
            <Image source={require('../../../../assets/Care_Link_Logo.png')} />
           {/* <Apptext style={styles.logoTxt}>Care Link</Apptext> */}
        </View>
    )
}

export default Splash;


const styles = StyleSheet.create({
    container :{
        backgroundColor : DefaultStyles.colors.white ,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoTxt:{
        color:DefaultStyles.colors.white,
        fontSize:45,
        fontFamily:'Poppins-SemiBold',
        fontStyle:'italic',
        lineHeight:68
    },

  });