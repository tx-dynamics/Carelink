import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import PaymentMethodComp from '../../../components/PaymentMethodComp';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';


const PaymentMethod = ({ navigation }) => {

    const [method, setMethod]= useState('Debit/Credit Card');
    const [isItem, setSelectedItem] = useState(['bd7acbea-c1b1-46c2-aed5-3ad53abb28ba']);


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "Debit/Credit Card",
            leftImg:require('../../../../assets/visa.png'),
            rightImg:require('../../../../assets/emptyBox.png'),
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    
        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "PayPal",
            leftImg:require('../../../../assets/paypal.png'),
            rightImg:require('../../../../assets/emptyBox.png'),
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    ];

    const addCategories = async (item) => {
       
        var selectedIdss = [...isItem]
        if (selectedIdss.includes(item.id)) {

            selectedIdss = selectedIdss.filter(id => id !== item.id)
            console.log(selectedIdss)
        }
        else {
            selectedIdss = [];
            selectedIdss.push(item.id)
        }
        await setSelectedItem(selectedIdss)
        console.log(isItem)
    }

    return (

        <View style={styles.container}>
         
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Select your Payment Method to Pay for Your Monthly Subscription"}
            />
            <View style={{marginTop:wp('8%') }} >
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <PaymentMethodComp
                        leftImgName={item.leftImg}
                        labelValue={item.label}
                        rightImgName={isItem.includes(item.id) ? require('../../../../assets/tickBox.png') : require('../../../../assets/emptyBox.png')}
                        rightOnPress={() => {
                            addCategories(item)
                            console.log(item.label)
                            setMethod(item.label)
                        }}
                        />
                  

                    )}
                />
            </View>
            <View style={{marginTop:wp('35%')}} >
            <FormButton
                    buttonTitle={"Next"}
                    width={'88%'}
                    onPress={() => {
                        method === "Debit/Credit Card" ?
                        navigation.navigate("SelectCard") : 
                        navigation.navigate("PayPalDetails")            
                    }}
                />
            </View>
        </View>
    )
}

export default PaymentMethod ;


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
    txtView: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('7%')
    },
    submitTxt: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',

    },
});