import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import SelectCardComp from '../../../components/SelectCardComp';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { heightPixel, widthPixel } from '../../../Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SelectCard = ({ navigation }) => {
    const [img, setImg] = useState(false);
    const [isItem, setSelectedItem] = useState([]);
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "*** ***  *5695",
            leftImg: require('../../../../assets/Bvisa.png'),
            rightImg: require('../../../../assets/roundTick.png'),
            cardName: "Visa",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd2327ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "*** ***  *8569",
            leftImg: require('../../../../assets/master1.png'),
            rightImg: require('../../../../assets/roundTick.png'),
            cardName: "Master Card",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b51-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "*** *** *5869",
            leftImg: require('../../../../assets/card.png'),
            rightImg: require('../../../../assets/roundTick.png'),
            cardName: "Debit Card",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];
    const addCategories = async (item) => {
        var selectedIdss = [...isItem]
        if (selectedIdss.includes(item.id)) {
            selectedIdss = selectedIdss.filter(id => id !== item.id)
        }
        else {
            selectedIdss = []
            selectedIdss.push(item.id)
        }
        await setSelectedItem(selectedIdss)
    }

    return (
        <View style={styles.container}>
            <View>
                <IconHeaderComp
                    title={"Select Card"}
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                    heading={"Add/Select your card for payments"}
                />
                {/* <View style={styles.txtView} >
                    <Apptext style={styles.submitTxt}>Here you can add multiple payment methods and select your main payment method to use at when checking out.   </Apptext>
                </View> */}
                {/* <View style={{ marginTop: wp('8%') }}>
                    <FormButton
                        buttonTitle={"+ Add"}
                        width={wp('45%')}
                        borderRadius={10}
                        fontSize={15}
                        onPress={() => navigation.navigate("AddCard")}
                    />
                </View> */}
                <View style={styles.marginView}>
                    <Apptext style={styles.selectTxt}>Select Payment Method</Apptext>
                    <View style={{ marginTop: wp('4%') }} >

                        <FlatList
                            ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <SelectCardComp cardName={item.cardName}
                                    leftImgName={item.leftImg}
                                    labelValue={item.label}
                                    rightImgName={item.rightImg}
                                    onPress={() => {
                                        addCategories(item)
                                        setImg(!img)
                                    }}
                                    myStl={isItem.includes(item.id) ? true : false}
                                />
                            )}
                        />
                    </View>

                </View>
            </View>
            <FormButton
                buttonTitle={"Continue"}
                onPress={() => navigation.navigate("PaymentDone")} />
        </View>
    )
}

export default SelectCard;


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
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: wp('7%')
    },
    submitTxt: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',

    },
    marginView: {
        marginHorizontal: wp('5%')
    },
    selectTxt: {
        marginTop: wp('5%'),
        marginHorizontal: widthPixel(15),
        color: DefaultStyles.colors.lightgray,
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    }
});