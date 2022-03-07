import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import PaymentMethodComp from '../../../components/PaymentMethodComp';


const AddCard = ({ navigation }) => {

    const [isTick, setTick] = useState(false);


    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                <Apptext style={styles.createTxt}>Add new card</Apptext>
            </View>
            <View style={{marginTop:-10}}>
            <FormInput
                    title={"Card number"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    placeholderText={"98170000 0000 0000"}
                    rightImgName={require('../../../../assets/grayCard.png')}

                />
                <View style={{flexDirection:'row',justifyContent:'space-around', marginHorizontal:wp('3%') }}> 

                  <FormInput
                    title={"Expiry date"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    width={wp('44%')}
                    placeholderText={"MM/YY"}
                    style={{width:wp('20%'),marginTop:-10,}}
                    rightImgName={require('../../../../assets/grayCalender.png')}


                />
                  <FormInput
                    title={"CVC/CVV"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    placeholderText={"..."}
                    width={wp('44%')}
                    style={{width:wp('20%'),marginTop:-10,}}
                    rightImgName={require('../../../../assets/infoCircle.png')}

                />
                </View>
                  <FormInput
                    title={"Cardholder name"}
                    placeholderText={"Enter cardholder’s full name"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}

                />
            </View>
            <View style={styles.saveView}>
                <TouchableOpacity onPress={() => setTick(!isTick)}>
                 {isTick ? (
                <Image style={{tintColor:DefaultStyles.colors.primary }} 
                source={require('../../../../assets/tickBox.png')} />)
                : 
                <TouchableOpacity 
                onPress={() => setTick(!isTick)}
                style={styles.unTickBox}>
                </TouchableOpacity>
                
                }
                </TouchableOpacity>
                <Apptext style={styles.saveCardTxt}>Save card</Apptext>
            </View>
            <View style={{marginTop:wp('78%')}} >
            <FormButton
                    buttonTitle={"Add"}
                    width={'88%'}
                    onPress={() => {
                        navigation.navigate("SelectCard")            
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default AddCard;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    unTickBox:{
        width:30,
        borderWidth:1,
        borderColor:DefaultStyles.colors.lightgray ,
        height:28,
        borderRadius:6
    },
    saveView:{
        flexDirection:'row',
        marginHorizontal:wp('5%'),
        marginTop:wp('10%')
    },
    saveCardTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:20,
        marginHorizontal:wp('4%')
    }
});