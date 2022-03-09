import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from '../components/Apptext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SelectBox = ({ count, leftTitle,myStl,backgroundColor=DefaultStyles.colors.primary,onPress, ...rest }) => {

    return (

            <TouchableOpacity
             onPress={onPress}
             style={styles.SightingContainer}
              >
            <View style={styles.DirectionView}>
            <Apptext style={styles.SightingText1 }>
                {leftTitle}
            </Apptext>
            <View style={styles.boxWidth}>
            <View style={[styles.pinkCircle, {backgroundColor:backgroundColor}]}>
            <Apptext style={styles.countStl1}>{count}</Apptext>
            </View>
            </View>
           
            </View>
            </TouchableOpacity>


    );
};

export default SelectBox;

const styles = StyleSheet.create({
  
    SightingContainer:{
        width:wp('90%'),
        marginTop:wp('4%'),
        marginBottom:wp("1%"),
        borderRadius:8,
        alignSelf:'center',
        backgroundColor:DefaultStyles.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 1,
    },
    DirectionView:{
        flexDirection:'row',
        alignItems:'center',
        padding:15,
    },
    countStl1:{
        color:DefaultStyles.colors.white,
        padding:1,
        fontSize:25,
        fontFamily:'Poppins-Regular'
    },
    boxWidth:{
        width:wp('12%'),
    },
   
    pinkCircle:{
        width:wp('11%'),
        // borderWidth:2,
        // borderColor:DefaultStyles.colors.secondary,
        height:wp('11%'),
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    SightingText1: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        width: wp('70%'),
        color: DefaultStyles.colors.secondary,
    },
});
