import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const NotificationsComp = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,time,
    onPress,borderRadius= 6,rightOnPress,
    color=DefaultStyles.colors.primary,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.inputContainer, {borderRadius:borderRadius}]} >
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
            
               <View style={styles.txtView}>
                <Apptext style={[styles.txtVal, {color:color }]}>{labelValue}</Apptext>
                </View>
                <Apptext style={[styles.txtVal, {marginTop:30, fontSize:11, color:color}]}>{time}</Apptext>             
             
            </View>
        </TouchableOpacity>
    );
};

export default NotificationsComp;

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
        width:wp('78%'),
        flexDirection:'row'
    },
    txtVal:{
        fontFamily:'Poppins-Regular',
        fontSize:wp('4.5%'),
    },
    inputContainer: {
        width: wp('88%'),
        alignSelf: 'center',
        padding:wp('2%'),
        borderBottomColor: "white",
    },
    hrtStl:{
        width:25,
        height:25,
        marginRight:wp('10%')
    }
});
