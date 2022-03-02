import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaultStyles from "../config/Styles";
import Apptext from './Apptext';
import { TextInput } from 'react-native-paper';

const FormInput = ({ labelValue, placeholderText,
    iconType, leftIconType, leftImgName, rightImgName,
    onPress,title,
    placeholderTextColor = '#929292',
    borderWidth=borderWidth,
    borderColor=borderColor ,
    borderBottomColor=borderBottomColor ,
    backgroundColor= DefaultStyles.colors.white,
    rightIconType, ...rest }) => {
    return (
        <View>
             
             <TextInput
                    value={title}
                    label={labelValue}
                    mode='outlined'
                    focusable={false}
                    activeOutlineColor={DefaultStyles.colors.black}
                    outlineColor={DefaultStyles.colors.black}
                    
                    underlineColor='transparent'
                    activeUnderlineColor='transparent'
                    style={[styles.inputContainer,
                        ]}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    placeholderTextColor={ placeholderTextColor} 
                    {...rest}
                />
              {/* <View style={styles.titleView} >
                    <Apptext style={styles.titleTxt}>{title}</Apptext>
                </View>
            <View style={{ flexDirection: 'row' }}>
               
                <View style={{ justifyContent: 'center' }} >
                    <Image source={leftImgName} />
                </View>
               
                <TextInput
                    value={labelValue}
                    type='flat'
                    style={styles.HumanInput}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    placeholderTextColor={ placeholderTextColor} 
                    {...rest}
                />
                <TouchableOpacity onPress={onPress}>
                <Image style={{width:14, height:14,tintColor:"gray",marginTop:wp('5%'), marginHorizontal:wp('5%') }} source={rightImgName} />
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    HumanInput: {
        //paddingLeft: wp('2%'),
        width: wp('70%'),
    
    },
    inputContainer: {
        width: wp('90%'),
        height: wp('13%'),
        marginTop: wp('11%'),
        alignSelf: 'center',
        paddingLeft: wp('3%'),
        //paddingTop: wp('1%'),
        justifyContent:'center',
        borderRadius: 10,
    },
    titleView:{
        // backgroundColor:DefaultStyles.colors.white,
        height:22,
        // marginTop:-13,
        marginLeft:wp('2%'),

    },
    titleTxt:{
        width:wp('25%'),
        fontSize:16,
        backgroundColor:DefaultStyles.colors.white,
        color:DefaultStyles.colors.black,
        fontFamily:'Poppins-Regular'
    }
});
