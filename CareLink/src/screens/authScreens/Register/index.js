import React,{useState, useEffect} from 'react';
import {StyleSheet,ScrollView, TouchableOpacity,Image,ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';


const Register = ({navigation}) => {

    return (

        <ScrollView style ={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image style={{marginHorizontal:wp('5%'),marginTop:18 }}
             source={require('../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
          <View>
              <Apptext style={styles.createTxt}>Create a free account to see your agency </Apptext>
          </View>
          <View>
              <Apptext style={[styles.createTxt, {fontFamily:'Poppins-Medium',}]}>Enter your Information: </Apptext>
          </View>
          <View>
          <FormInput 
          labelValue={"First name"}
          />
           <FormInput 
          title={"Last name"}
          />
           <FormInput 
          borderColor={DefaultStyles.colors.black}
          borderWidth={1}
          title={"Email"}
          />
           <FormInput 
          borderColor={DefaultStyles.colors.black}
          borderWidth={1}
          title={"Password"}
          />
          </View>
          <View style={{marginTop:wp('11'), alignSelf:'center', width:wp('90%')}}>
              <Apptext style={styles.termsTxt}>By clicking “ Join now,”you agree to our <Apptext style={styles.hyperLink} >Terms of Use</Apptext> and <Apptext style={styles.hyperLink}>Privacy Policy.</Apptext> </Apptext>
          </View>
          <View style={{marginTop:wp('8%')}}>
          <FormButton
          buttonTitle={"Create Now"}
          />
          </View>
        </ScrollView>
    )
}

export default Register;


const styles = StyleSheet.create({
    container :{
        backgroundColor : DefaultStyles.colors.white ,
        flex:1,
    },
    createTxt:{
        marginTop:wp('8%'),
        color:DefaultStyles.colors.black,
        fontFamily:'Poppins-Regular',
        fontSize:wp('6%'),
        marginHorizontal:wp('5%')
    },
    termsTxt:{
        textAlign:'center',
        fontSize:13,
        alignSelf:'center',
        fontFamily:'Poppins-Regular',
        width:wp('75%')
    },
    hyperLink:{
        fontSize:13,
        fontFamily:'Poppins-Regular',
        textDecorationLine:'underline',
        color:"blue"        
    }
  });