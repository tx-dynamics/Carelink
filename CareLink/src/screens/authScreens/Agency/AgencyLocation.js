import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import { useSelector } from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPixel } from '../../../Constants';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import { RedFlashMessage } from '../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const AgencyLocation = ({ navigation,route }) => {
    console.log("agency location ", JSON.stringify(route?.params))
    const usertype = useSelector((state) => state.splash.userType)
    const [street, setStreet] = useState("")
    const [apartment, setApartment] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [isState, setState] = useState("")
    const onNextPress = () => {
        //APK  // if (street == "" || apartment == "" || zipCode == "" || isState == "") {
        // RedFlashMessage("Details required")
        //     return
        // }
        navigation.navigate("AgencyMap")
    }
    return (
        <AppGLobalView style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
                <IconHeaderComp
                    title={"Location"}
                    onPress={() => navigation.goBack()}
                    imgName={iconPath.leftArrow}
                    heading={usertype === "ServiceSide" ? "Your location where your listed rooms located?" : "Your location where your agency located?"}
                />
                <View>
                    <Apptext style={[styles.createTxt, { fontFamily: 'Poppins-Medium', }]}>Enter your location: </Apptext>
                </View>
                <View style={{ marginBottom: heightPixel(50) }} >
                    <AppTextInput value={street} onChangeText={setStreet} title={"Street Address"} />
                    <AppTextInput value={apartment} onChangeText={setApartment} title={"Aparment Number"} />
                    <AppTextInput value={zipCode} onChangeText={setZipCode} title={"Zip Code"} />
                    <AppTextInput value={isState} onChangeText={setState} title={"State"} />
                </View>
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Next"}
                onPress={onNextPress}
            />
        </AppGLobalView>
    )
}

export default AgencyLocation;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
});