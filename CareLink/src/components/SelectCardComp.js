import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';

const SelectCardComp = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress,borderRadius= 6,rightOnPress,myStl,
    rightIconType, ...rest }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={myStl ? [styles.inputContainer, { borderColor:DefaultStyles.colors.primary,
            borderWidth:1,borderRadius:borderRadius}] : [styles.inputContainer, {borderRadius:borderRadius}]} >
            
            <View style={{ flexDirection: 'row', alignItems:'center' }}>
              <View style={styles.imgView}>
               <Image
                source={leftImgName}
               />
               </View>
               <View style={styles.txtView}>
                <Apptext style={styles.txtVal}>{labelValue}</Apptext>
                </View>
              {myStl ? <View style={styles.pinkCircle}>
                <Image
                source={rightImgName}  />
                </View> : null}
            </View>
        </TouchableOpacity>
    );
};

export default SelectCardComp;

const styles = StyleSheet.create({
    inputContainer: {
        width: wp('88%'),
        marginBottom:wp('5%'),
        alignSelf: 'center',
        height:wp('23%'),
        justifyContent:'center',
        padding:wp('2%'),
        paddingLeft:wp('8%'),
        backgroundColor: DefaultStyles.colors.white,
        // borderBottomColor: "white",
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3, 
    },
    pinkCircle:{
        width:36,
        height:36,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:DefaultStyles.colors.primary,
        borderRadius:20
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
        // backgroundColor:"red",
        textAlign:'center',
        alignItems:'center',
        width:wp('52%'),
    },
    txtVal:{
        fontFamily:'Poppins-Regular',
        fontSize:wp('3%') ,
        color:DefaultStyles.colors.black,
        
    },
    hrtStl:{
        width:25,
        height:25,
        marginRight:wp('10%')
    }
});
