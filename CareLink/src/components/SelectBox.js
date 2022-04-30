import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from '../components/Apptext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SelectBox = ({ count, leftTitle,myStl,
    circle = false,description,isDesc = false,
    bg = DefaultStyles.colors.white,txtClr = DefaultStyles.colors.textColor,
    backgroundColor=DefaultStyles.colors.primary,onPress, ...rest }) => {

    return (

            <TouchableOpacity
             onPress={onPress}
             style={[styles.SightingContainer, {
                backgroundColor:bg
             }]}
              >
            <View style={styles.DirectionView}>
            <Apptext style={[styles.SightingText1, {
            color: txtClr,
            }]}>
                {leftTitle}
            </Apptext>
        
           {circle === true ?
           <View style={styles.boxWidth}>
            <View style={[styles.pinkCircle, {backgroundColor:backgroundColor}]}>
            <Apptext style={styles.countStl1}>{count}</Apptext>
            </View>
            </View> : null }

            {circle ===false ? <Apptext style={styles.underLine }>
                {"Upgrade"}
            </Apptext> : null}

            </View>
           {isDesc ? <Apptext style={styles.descTxt }>
                {description}
            </Apptext> : null}
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
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        width: wp('70%'),
    },
    descTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:15,
        marginHorizontal:wp('4%'),
        marginTop:-25,
        marginBottom:wp('2%'),
        color:DefaultStyles.colors.white
    },
    underLine:{
        fontFamily:'Poppins-Regular',
        fontSize:13,
        marginLeft:-15,
        marginTop:wp('3%'),
        textDecorationLine:'underline',
        color:DefaultStyles.colors.white
    }
});
