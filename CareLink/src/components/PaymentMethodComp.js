import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const PaymentMethodComp = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress,borderRadius= 10,rightOnPress,
    rightIconType, ...rest }) => {
    return (
        <View 
        onPress={onPress}
        style={[styles.inputContainer, {borderRadius:borderRadius}]} >
            <View style={styles.direcView}>
              <View style={styles.imgView}>
               <Image
                source={leftImgName}
               />
               </View>
               <View style={styles.txtView}>
                <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                </View>
                <TouchableOpacity onPress={rightOnPress} >
                <Image
                style={styles.hrtStl}
                source={rightImgName}  />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PaymentMethodComp;

const styles = StyleSheet.create({
    direcView:{
        flexDirection: 'row',alignItems:'center'
    },
    inputContainer: {
        width: wp('88%'),
        marginBottom:wp('5%'),
        alignSelf: 'center',
        height:wp('23%'),
        justifyContent:'center',
        padding:wp('2%'),
        paddingLeft:wp('4%'),
        backgroundColor: DefaultStyles.colors.primary,
        borderBottomColor: "white",
       
    },
    imgView:{
        width:46,
        height:46,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:DefaultStyles.colors.white
    },
    txtView:{
        justifyContent:'center',
        marginHorizontal:wp('3%'),
        width:wp('50%'),
    },
    txtVal:{
        fontFamily:'Poppins-Regular',
        fontSize:wp('4%'),
        color:DefaultStyles.colors.white
    },
   
    hrtStl:{
        width:25,
        height:25,
        marginRight:wp('10%')
    }
});
