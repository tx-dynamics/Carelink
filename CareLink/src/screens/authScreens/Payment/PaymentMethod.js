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
import { heightPixel } from '../../../Constants';
import { appIcons } from '../../../Constants/Utilities/assets';


const PaymentMethod = ({ navigation }) => {
    const [method, setMethod] = useState('Debit/Credit Card');
    const [isItem, setSelectedItem] = useState(['bd7acbea-c1b1-46c2-aed5-3ad53abb28ba']);
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "Debit/Credit Card",
            leftImg: require('../../../../assets/visa.png'),
            rightImg: require('../../../../assets/emptyBox.png'),
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4besadasa-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "Apple Pay",
            leftImg: appIcons.apple,
            rightImg: require('../../../../assets/emptyBox.png'),
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "Google Pay",
            leftImg: appIcons.google,
            rightImg: require('../../../../assets/emptyBox.png'),
            description: `You will get 20 listing to post in a month with this monthly plan`
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
            <View>
                <IconHeaderComp title={"Payment Method"}
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                    heading={"Select your Payment Method to Pay for Your Monthly Subscription"}
                />
                <View style={{ marginTop: wp('8%') }} >
                    <FlatList showsVerticalScrollIndicator={false}
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
            </View>
            <FormButton
                buttonTitle={"Next"}
                onPress={() => { navigation.navigate("SelectCard") }}
            />
        </View>
    )
}
export default PaymentMethod;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
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