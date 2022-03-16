import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const ServiceListingComp = ({ labelValue, when, fors, hourly, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    showHrt,showProposals,name,location,rightImg = require('../../assets/heart.png'),
    onPress,borderRadius= 10,rightOnPress,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.inputContainer, {borderRadius:borderRadius}]}>

            {/* Propsal Starts Here */}
            {showProposals ? <View style={{height:55}}>
            <View style={{flexDirection:'row', marginTop:wp('1%')}}>
            <TouchableOpacity>
            <Image style={styles.imgView} source={require('../../assets/photo.png')} />
            </TouchableOpacity>
            <Apptext style={styles.jamesTxt} >{name}</Apptext>
            <Apptext style={[styles.jamesTxt, 
            {fontSize:15,fontFamily:'Poppins-Medium',
            textDecorationLine: 'underline',}]}>
            Edit</Apptext>
            </View>
            <Apptext style={{marginLeft:80,fontSize:9, marginTop:-35}} >{location}</Apptext>
            <Image style={{marginLeft:77,height:15, width:80  }}  source={require('../../assets/stars.png')} />
            </View> : null}
            {/* Propsal Ends Here */}

                 <View style={styles.txtView}>
                 <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                 </View>

            <View style={{marginHorizontal:wp('5%'), flexDirection: 'row',alignItems:'center' }}>
                <Apptext style={styles.scndTxt}>{when + "  "}</Apptext>
                <Apptext style={styles.dot} ></Apptext>
                <Apptext style={styles.scndTxt}>{"  "+ fors + "  "}</Apptext>
                <Apptext style={styles.dot} >  </Apptext>
                <Apptext style={styles.scndTxt}>{ "  " + hourly + "  "}</Apptext>
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly', marginHorizontal:wp('5%'), marginLeft:-18} }>
                <Apptext style={[styles.scndTxt, { backgroundColor:'#f0a1f0',padding:5,borderRadius:5 }]}>{"kitchen available"}</Apptext>
                <Apptext style={[styles.scndTxt, {backgroundColor:'#f0a1f0',padding:5,marginLeft:-20, borderRadius:5 }]}>{"Car Parking available"}</Apptext>
                
                </View>
                <View style={{height:wp('2%')}}>

                </View>
        </TouchableOpacity>
    );
};

export default ServiceListingComp;

const styles = StyleSheet.create({
    HumanInput: {
        paddingLeft: wp('2%'),
        width: wp('70%'),
    
    },
    imgView:{
        width:59,
        marginHorizontal:wp('4%'),
        borderRadius:10,
        height:60,
    },
    jamesTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:15,
        width:wp('58%'),
        marginLeft:-8,
        // marginTop:wp('1%'),
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
        width:wp('75%'),
        marginTop:wp('3%'),
        // backgroundColor:"red"
    },
    txtVal:{
        fontFamily:'Poppins-Medium',
        fontSize:18,
        marginTop:wp('2%')
    },
    lightTxt:{
        fontSize:8,
        marginTop:wp('4%'),
        color:"lightgray",
    },
    scndTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:11,
        marginTop:wp('1%')
    },
    dot:{
        width:5,
        height:5,
        backgroundColor:"black",
        borderRadius:5,
        marginTop:wp('1%')
    },
    inputContainer: {
        width: wp('90%'),
        marginBottom:wp('5%'),
        alignSelf: 'center',
        // height:105,
        padding:wp('2%'),
        paddingLeft:0,
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
