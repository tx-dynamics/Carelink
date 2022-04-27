import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const ReviewsComp = ({ labelValue, when, fors, hourly, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    showHrt,showProposals,name,location,
    onPress,borderRadius= 10,rightOnPress,
    rightIconType, ...rest }) => {
    
        return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.inputContainer, {borderRadius:borderRadius}]}>

            {/* Propsal Starts Here */}
            {showProposals ? <View style={{height:55}}>
            <View style={{flexDirection:'row', marginTop:wp('1%')}}>
            <TouchableOpacity style={styles.imgView}>
            <Image style={{width:51, height:51}} source={require('../../assets/JC.png')} />
            </TouchableOpacity>
            <Apptext style={styles.jamesTxt} >{name}</Apptext>
            {/* <Apptext style={[styles.jamesTxt, {fontSize:13, textDecorationLine: 'underline', }]}>See Details</Apptext> */}

            </View>
            <Apptext style={{marginLeft:80,color:DefaultStyles.colors.gray, fontSize:14, marginTop:-25}} >{location}</Apptext>
            {/* <Apptext style={styles.txtVal}>{labelValue}</Apptext> */}

            </View> : null}
            {/* Propsal Ends Here */}
            <View style={{marginHorizontal:wp('3%'),marginTop:wp('5%'), flexDirection: 'row',alignItems:'center' }}>
                <Image 
                // style={{tintColor : DefaultStyles.colors.lightPrimary }}
                source={require('../../assets/circleTickNew.png')} />
                <Apptext style={styles.scndTxt}>{" " + when + " "}</Apptext>
                <Image source={require('../../assets/circleTickNew.png')} />
                <Apptext style={styles.scndTxt}>{" " + fors + " "}</Apptext>
                <Image source={require('../../assets/circleTickNew.png')} />
                <Apptext style={styles.scndTxt}>{" " + hourly + " "}</Apptext>
                
            </View>
                 <View style={styles.txtView}>
                 <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                 </View>
                
       
        </TouchableOpacity>
    );
};

export default ReviewsComp;

const styles = StyleSheet.create({
    HumanInput: {
        paddingLeft: wp('2%'),
        width: wp('70%'),
    
    },
    imgView:{
        width:51,
        marginHorizontal:wp('4%'),
        borderRadius:30,
        height:51,
    },
    jamesTxt:{
        fontFamily:'Poppins-Medium',
        fontSize:17,
        width:wp('42%'),
        // backgroundColor:"blue"
    },
    imgStl:{
        width:57,
        height:57,
        borderRadius:43,
    },
    txtView:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:wp('5%'),
        marginTop:wp('3%'),
        width:wp('80%'),
        // marginTop:wp('4%'),
        // backgroundColor:"red"
    },
    txtVal:{
        fontFamily:'poppins-Regular',
        fontSize:14
    },
    lightTxt:{
        fontSize:8,
        marginTop:wp('2%'),
        color:"lightgray",
    },
    scndTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:12,
        marginTop:wp('1%')
    },
    dot:{
        width:5,
        height:5,
        backgroundColor:"gray",
        borderRadius:5
    },
    inputContainer: {
        width: wp('90%'),
        marginBottom:wp('3%'),
        alignSelf: 'center',
        // height:105,
        padding:wp('2%'),
        // paddingLeft:wp('4%'),
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
    hrtStl:{
        width:25,
        height:25,
        marginRight:wp('10%')
    }
});
