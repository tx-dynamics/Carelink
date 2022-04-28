import React from 'react';
import { View,StyleSheet,TextInput, TouchableOpacity, Image } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
// import { TextInput } from 'react-native-paper';

const FormInput = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress,title,
    inputMargin = -10,
    placeholderTextColor = '#929292',
    borderWidth=borderWidth,
    borderColor=borderColor ,
    borderBottomColor=borderBottomColor ,
    backgroundColor= DefaultStyles.colors.white,
    numberOfLines =1,
    height= wp('13%'),
    width= wp('90%'),
    marginTop=marginTop,
    rightIconType, ...rest }) => {
    return (
        <View>
        <View style={[styles.inputContainer, 
            {backgroundColor : backgroundColor,
            height:height,
            width:width,
            borderColor:borderColor,
            borderWidth:borderWidth,
            borderBottomColor:borderBottomColor}]}>         
             {/* <TextInput
                    value={title}
                    label={labelValue}
                    mode='outlined'
                    focusable={false}
                    activeOutlineColor={DefaultStyles.colors.black}
                    outlineColor={DefaultStyles.colors.black}
                    underlineColor='transparent'
                    activeUnderlineColor='transparent'
                    
                    style={[styles.inputContainer,backgroundColor={backgroundColor}]}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    placeholderTextColor={ placeholderTextColor} 
                    {...rest}
                /> */}
         
         <View style={styles.titleView} >
                    <Apptext style={[styles.titleTxt, {marginTop:marginTop }]}>{title}</Apptext>
                </View>
            <View style={{ flexDirection: 'row' }}>
               
                <View style={{ justifyContent: 'center' }} >
                    <Image source={leftImgName} />
                </View>
               
                <TextInput
                    value={labelValue}
                    style={[styles.HumanInput, {marginTop:inputMargin}]}
                    numberOfLines={numberOfLines}
                    placeholder={placeholderText}
                    placeholderTextColor={ placeholderTextColor} 
                    {...rest}
                />
                <TouchableOpacity style={{marginTop:-10, justifyContent:'center'}} onPress={onPress}>
                <Image style={{tintColor:"gray",marginHorizontal:wp('5%') }} source={rightImgName} />
                </TouchableOpacity>
            </View>
        </View>
        </View>

    );
};

export default FormInput;

const styles = StyleSheet.create({
    HumanInput: {
        width: wp('70%'),
        // backgroundColor:"red",
        // height:40,
        // paddingTop:20
        // paddingTop:-20,
        // alignItems:'center'
        // paddingTop:-10,
        
    },
    inputContainer: {
        marginTop: wp('11%'),
        alignSelf: 'center',
        paddingLeft: wp('3%'),
        //paddingTop: wp('1%'),
        justifyContent:'center',
        borderRadius: 10,
    },
    titleView:{
        // backgroundColor:DefaultStyles.colors.white,
        // height:22,
        // marginTop:-13,
        // alignSelf:'center',
        // marginHorizontal:wp('5%'),
        alignSelf:'flex-start',
        marginTop :-10
        // marginLeft:-200,

    },
    titleTxt:{
        // width:wp('25%'),
        fontSize:16,
        backgroundColor:DefaultStyles.colors.white,
        // backgroundColor:"red",
        height:22,
        // alignSelf:'center',
        marginLeft:wp('2%'),
        textAlign:'left',
        color:DefaultStyles.colors.black,
        fontFamily:'Poppins-Regular'
    }
});
