import React,{useState, useEffect} from 'react';
import {StyleSheet,ScrollView, TouchableOpacity,Image,ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';

const Step3 = ({navigation}) => {

    return (

        <ScrollView style ={styles.container}>
           <TouchableOpacity 
           onPress={() => navigation.navigate("AskRegister")}
           style={styles.skipDirection}>
           <Apptext style={styles.skipTxt}>Skip</Apptext>
           </TouchableOpacity>
           <View style={styles.boxView} >
               <Image style={{width:154,alignSelf:'center', height:274 }} 
               source={require('../../../../assets/step3New.png')} />
               <Apptext style={styles.pinkTxt} >List your extra rooms </Apptext>
               <Apptext style={styles.lightTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies viverra congue platea fermentum volutpat eget porta facilisis.</Apptext>
           </View>
            <View style={styles.threeDots}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.line}></View>

            </View>
            <TouchableOpacity 
            onPress={() => navigation.navigate("AskRegister")}
            style={{ alignSelf:'center',marginTop:wp('25%'), }}>
            <Image style={{width:105, height:105,}} source={require('../../../../assets/Step2BoxNew.png')} />
            </TouchableOpacity>
            {/* <View style={styles.underLine}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("AskRegister")}
            style={styles.btn}>
            <Image source={require('../../../../assets/rightArrow.png')} />
            </TouchableOpacity>
            </View> */}
        </ScrollView>
    )
}

export default Step3;


const styles = StyleSheet.create({
    container :{
        backgroundColor : DefaultStyles.colors.white ,
        flex:1,
    },
    skipDirection:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginHorizontal:wp('6%')
    },
    skipTxt:{
        color:DefaultStyles.colors.lightgray,
        marginTop:wp('7%'),
    },
    boxView:{
        alignSelf:'center',
        width:wp("90%"),
        marginTop:wp('17%'),
    },
    pinkTxt:{
     marginTop:25,
     alignSelf:'center',
     color:DefaultStyles.colors.primary,
     fontFamily:'Poppins-SemiBold',
     fontSize:wp('8%')   
    },
    lightTxt:{
        marginTop:wp('1%'),
        color:DefaultStyles.colors.lightgray,
        alignSelf:'center',
        textAlign:'center',
        fontSize:15
    },
    threeDots:{
        marginTop:wp('16%'),
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:wp('43%')
        // alignSelf:'center',
    },
    dot:{
        width:8,
        height:8,
        backgroundColor:'#ECECEC',
        borderRadius:8
    },
    line:{
        height:8,
        width:18,
        backgroundColor:DefaultStyles.colors.primary,
        borderRadius:8
    },
    underLine:{
        marginTop:wp('25%'),
        alignSelf:'center',
        borderRadius:50,
        borderWidth:2,
        // backgroundColor:"white",
        // borderColor:"#F1F1F1",
        borderTopColor :DefaultStyles.colors.primary,
        borderRightColor:DefaultStyles.colors.primary,
        borderLeftColor:DefaultStyles.colors.primary,
        borderBottomColor:DefaultStyles.colors.primary,
        padding:8,
        marginBottom:wp('7%')
    },
    btn:{
        width:wp('20%'),
        height:wp('20%'),
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:DefaultStyles.colors.primary,
        alignSelf:'center',
    }

  });