import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const ReportComp = ({
    firstHead,sncdHead,thirdHead,frthHead,
    frstPrc,scndPrc,thirdPrc,frthPrc,
    onPress, ...rest }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.inputContainer}>
            <View style={styles.direcView}>

        <View style={styles.marginView}>
        <Apptext style={styles.headTxt} >{firstHead}</Apptext>
        <Apptext style={[styles.prcTxt, {color:DefaultStyles.colors.primary}]} >{frstPrc}</Apptext>
        </View>
        <View style={styles.marginView}>
        <Apptext style={styles.headTxt} >{sncdHead}</Apptext>
        <Apptext style={styles.prcTxt} >{frstPrc}</Apptext>
        </View>
        </View>
        {/* ////////////////////////////////////////////// */}
        <View style={styles.lastDirec}>
        <View style={styles.marginView}>
        <Apptext style={styles.headTxt} >{firstHead}</Apptext>
        <Apptext style={styles.prcTxt} >{frstPrc}</Apptext>
        </View>
        <View style={styles.marginView}>
        <Apptext style={styles.headTxt} >{sncdHead}</Apptext>
        <Apptext style={styles.prcTxt} >{frstPrc}</Apptext>
        </View>
        </View>

        </TouchableOpacity>
    );
};

export default ReportComp;

const styles = StyleSheet.create({
    direcView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    lastDirec:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:wp('4%')
    },
    inputContainer: {
        width: wp('90%'),
        marginBottom:wp('6%'),
        alignSelf: 'center',
        padding:wp('4%'),
        borderRadius:10,
        backgroundColor: DefaultStyles.colors.white,
        borderBottomColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,  
        elevation: 3,
    },
    marginView:{
        width:wp('40%'),
    },
    PricemarginView:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    headTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        color:DefaultStyles.colors.black
    },
    prcTxt:{
        textAlign:'left',
        color:DefaultStyles.colors.black,
        fontFamily:'Poppins-Medium',
        fontSize:19,
        marginTop:wp('2%')        
    }

});
