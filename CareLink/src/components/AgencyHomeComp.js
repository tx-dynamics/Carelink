import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const AgencyHomeComp = ({ labelValue, AvailableRooms, BookedRooms,
    placeholderText, iconType, leftIconType, leftImgName, rightImgName,
    onPress,borderRadius= 10,rightOnPress, firstTxt,scndTxt,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.inputContainer, {borderRadius:borderRadius}]} >
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
               <View style={styles.txtView}>
                <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                </View>
                <View style={{width:wp('20%'),alignItems:'center',}}>
                <View style={styles.circle} >
                <Apptext style={[styles.nmbr]}>{AvailableRooms}</Apptext>
                </View>
                <Apptext style={[styles.txt]}>{firstTxt}</Apptext>
                </View>
                {/* /////////////////////////// */}
                <View style={{width:wp('20%'),alignItems:'center',}}>
                <View style={[styles.circle, {backgroundColor:"#999999"}]} >
                <Apptext style={[styles.nmbr, {color:"white"}]}>{BookedRooms}</Apptext>
                </View>
                <Apptext style={[styles.txt, {color:"white"}]}>{scndTxt}</Apptext>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AgencyHomeComp;

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
        fontSize:12,
        fontFamily:'Poppins-Regular',
        color:DefaultStyles.colors.white
    },
    inputContainer: {
        width: wp('90%'),
        marginBottom:wp('7%'),
        flexDirection:'row',
        height:105,
        padding:wp('2%'),
        paddingLeft:wp('4%'),
        backgroundColor: DefaultStyles.colors.primary,
        borderBottomColor: "white",

    },
    hrtStl:{
        width:25,
        height:25,
        marginRight:wp('10%')
    }
});
