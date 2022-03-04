import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import PlansComp from '../../../components/PlansComp';


const PaymentPlans = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "Subscribe",
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    
        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$59.99",
            plans:"/month",
            label: "Subscribe",
            description:"You will get 50 listing to post in a month with this monthly plan"
        },
    
        {
            id: 'bd7acbea-c1b1-46c23-aed5-3ad53abb28ba',
            price:"$99.99",
            plans:"/month",
            label: "Subscribe",
            description:"You will get 100 listing to post in a month with this monthly plan"
        },
    


    ];

    return (

        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                <Apptext style={styles.createTxt}>Subscribe your plan to continue</Apptext>
            </View>
            <View style={styles.txtView} >
                <Apptext style={styles.submitTxt} >Subscribe Care Link to submit you rooms listings </Apptext>
                <Apptext style={[styles.submitTxt, { fontFamily: 'Poppins-Medium' }]}>Choose your plan and get started</Apptext>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <PlansComp
                        btnTxt={item.label}
                        price={item.price }
                        plan={"/month"}
                        desc={item.description}
                        onPress={() =>navigation.navigate("PaymentMethod") }
                    />
                  

                    )}
                />

            </View>
        </ScrollView>
    )
}

export default PaymentPlans;


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