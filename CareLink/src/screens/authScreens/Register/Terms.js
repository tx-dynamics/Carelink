import React,{useState, useEffect} from 'react';
import {StyleSheet,ScrollView, TouchableOpacity,Image,ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';


const Terms = ({navigation}) => {

    return (

        <ScrollView style ={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image style={{marginHorizontal:wp('5%'),marginTop:18 }}
             source={require('../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
          <View>
              <Apptext style={styles.createTxt}>Terms and Conditions</Apptext>
          </View>
          <Apptext style={styles.termsTxt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, sed eros, scelerisque velit. Consectetur nec in elit porttitor malesuada aenean tortor. Consequat, at tincidunt quis amet imperdiet aliquam. Feugiat tortor malesuada phasellus id enim in. Tincidunt consectetur morbi enim, viverra habitant commodo sed phasellus non. Hendrerit habitasse aenean 
           
            sem nibh enim, ultricies duis arcu. Praesent vitae ultrices cursus integer egestas lobortis feugiat ut leo. Semper tempor, eu ornare et, tempus scelerisque quisque eget duis.
            Metus amet, aliquet cursus at in et amet. Sem mauris aliquam ac sed orci mauris senectus. Purus eget faucibus dui nulla felis, vulputate sapien quis. Egestas vel, sed faucibus enim. Imperdiet nibh nibh elit a porttitor. Consectetur lacinia consectetur pellentesque felis. Consequat proin nec tincidunt viverra nulla convallis urna.
            
          </Apptext>
      
        </ScrollView>
    )
}

export default Terms;


const styles = StyleSheet.create({
    container :{
        backgroundColor : DefaultStyles.colors.white ,
        flex:1,
    },
    createTxt:{
        marginTop:wp('11%'),
        color:DefaultStyles.colors.black,
        fontFamily:'Poppins-SemiBold',
        fontSize:wp('5%'),
        marginHorizontal:wp('5%')
    },
    termsTxt:{
        marginTop:14,
        textAlign:'left',
        fontSize:14,
        alignSelf:'center',
        fontFamily:'Poppins-Regular',
        width:wp('90%')
    },
  });