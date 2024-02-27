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
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const AddCard = ({ navigation }) => {
    const [isTick, setTick] = useState(false);
    return (
        <AppGLobalView style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Add new card"}
            />
            <View style={{ marginTop: -10 }}>
                <FormInput
                    title={"Card number"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                    placeholderText={"98170000 0000 0000"}
                    rightImgName={require('../../../../assets/grayCard.png')}
                />
                <View style={{ flexDirection: 'row', }}>
                    <FormInput
                        title={"Expiry date"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                        width={wp('47%')}
                        placeholderText={"MM/YY"}
                        rightImgName={require('../../../../assets/grayCalender.png')}
                    />
                    <FormInput
                        title={"CVC/CVV"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                        placeholderText={"..."}
                        width={wp('48%')}
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
                        <Image style={{ tintColor: DefaultStyles.colors.primary }}
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
            <View style={{ marginTop: wp('35%') }} >
                <FormButton
                    buttonTitle={"Add"}
                    width={'88%'}
                    onPress={() => {
                        navigation.navigate("SelectCard")
                    }}
                />
            </View>
        </AppGLobalView>
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
    unTickBox: {
        width: 30,
        borderWidth: 1,
        borderColor: DefaultStyles.colors.lightgray,
        height: 28,
        borderRadius: 6
    },
    saveView: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        marginTop: wp('10%')
    },
    saveCardTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginHorizontal: wp('4%')
    }
});