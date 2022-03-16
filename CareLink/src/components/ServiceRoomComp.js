import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const ServiceRoomComp = ({ labelValue, AvailableRooms, BookedRooms,
    placeholderText, iconType, leftIconType, leftImgName, rightImgName,
    onPress,borderRadius= 10,rightOnPress, firstTxt,scndTxt,
    width: width,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.inputContainer,
        {   width: width,
            borderRadius:borderRadius
        }]} >
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <View style={{width:wp('20%'),alignItems:'center',}}>
                <View style={styles.circle} >
                <Apptext style={[styles.nmbr]}>{AvailableRooms}</Apptext>
                </View>
                <Apptext style={[styles.txt]}>{firstTxt}</Apptext>
                </View>
           
            </View>
        </TouchableOpacity>
    );
};

export default ServiceRoomComp;

const styles = StyleSheet.create({
    HumanInput: {
        paddingLeft: wp('2%'),
        width: wp('70%'),
    
    },
    imgStl:{
        width:57,
        height:57,
        borderRadius:43,
    },
    txtView:{
        justifyContent:'center',
        width:wp('45%'),
    },
    txtVal:{
        fontFamily:'poppins-Regular',
        fontSize:25,
        color:"white"
    },
    btm:{
        marginTop:wp('20%'),

    },
    circle:{
        width:39,
        marginHorizontal:wp('3%'),
        alignItems:'center',
        justifyContent:'center',
        height:39, borderRadius:20, backgroundColor:"white"
    },
    nmbr:{
        fontFamily:'Poppins-Regular',
        fontSize:25,
        lineHeight:35,
    },
    txt:{
        marginTop:wp('1%'),
        fontSize:12,
        fontFamily:'Poppins-Regular',
        color:DefaultStyles.colors.white
    },
    inputContainer: {
        marginBottom:wp('5%'),
        flexDirection:'row',
        // alignSelf: 'center',
        justifyContent:'center',
        height:120,
        // padding:wp('2%'),
        // paddingLeft:wp('4%'),
        marginHorizontal:wp('1%'),
        backgroundColor: DefaultStyles.colors.primary,
        borderBottomColor: "white",

    },
    hrtStl:{
        width:25,
        height:25,
        marginRight:wp('10%')
    }
});
