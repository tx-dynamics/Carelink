import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';
import { fontPixel, heightPixel, routes } from '../../../../Constants';
import NewAppTextInput from '../../../../components/NewAppTextInput/NewAppTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeedBackCheckBox from '../../../../components/FeedbackCheckBox/FeedBackCheckBox';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { SuccessFlashMessage } from '../../../../Constants/Utilities/assets/Snakbar';

const Feedback = ({ navigation }) => {
    const [data, setData] = useState([
        {
            id: 0,
            title: "Would rehire",
            check: false
        },
        {
            id: 1,
            title: "Punctual",
            check: false
        },
        {
            id: 2,
            title: "Dependable",
            check: false
        },
    ])
    const onCheckPress = (item, index) => {
        const updatedDataArray = [...data]; // Create a copy of the dataArray
        if (!item.check) {
            updatedDataArray[index] = { ...item, check: true }; // Update the item's check property
        }
        else { updatedDataArray[index] = { ...item, check: false }; }
        setData(updatedDataArray); // Update the state with the modified array
    };
    const onSubmitPress = () => {
        SuccessFlashMessage("Your feedback has been submitted")
        // navigation.goBack()
        navigation.navigate("HomeNavigator")
    }
    return (
        <View style={styles.container}>
            <IconHeaderComp title={"Add Review"}
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Submit a feedback to your hired agency"}
                style={styles.rms}
            />
            <KeyboardAwareScrollView>
                <View style={styles.txtView}>
                    <Apptext style={[styles.rms1]} >Click to write: </Apptext>
                </View>
                <NewAppTextInput multiline />
                <FlatList scrollEnabled={false} keyExtractor={(item, index) => item.id} data={data} renderItem={({ item, index }) => <FeedBackCheckBox pic={item.check ? appIcons.tick1 : appIcons.untick} title={item.title} onPress={() => onCheckPress(item, index)} />} />
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Submit"} onPress={onSubmitPress} />
        </View>
    )
}

export default Feedback;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    imgView: {
        width: wp('30%'),
        marginTop: wp('7%'),
        height: wp('30%'),
        alignSelf: 'center',
        borderRadius: 60
    },
    upldTxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop: wp('3%'),
        color: "#407fb9"
    },
    jmsTxt: {
        marginTop: wp('4%'),
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
    dcTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        alignSelf: 'center'
    },
    pinkBox: {
        width: 200,
        borderRadius: 10,
        backgroundColor: DefaultStyles.colors.lightPrimary,
        alignSelf: 'center',
        marginTop: wp('3%')
    },
    mmbrTxt: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: wp('1%')
    },
    btn: {
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 30,
        width: 103,
        alignSelf: 'center',
        padding: 5,
        marginTop: wp('13%'),

    },
    acntTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        alignSelf: 'center',
        color: DefaultStyles.colors.white,
    }
    ,
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%')
    },
    rms: {
        // fontFamily: 'Poppins-SemiBold',
        fontSize: fontPixel(24)
    },
    rms1: {
        fontSize: 19,
        fontFamily: 'Poppins-Medium',
        marginTop: heightPixel(20),
        marginBottom: heightPixel(10)
    },
    dtls: {
        color: DefaultStyles.colors.black,
        textDecorationLine: 'underline',
    },
    DirectionView1: {
        flexDirection: 'row',
        marginHorizontal: wp('5%')
    },
    radioBtn: {
        marginTop: wp('5%'),
        width: 27,
        height: 27,
        borderRadius: 6,
        borderColor: DefaultStyles.colors.primary,
        borderWidth: 2
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginTop: wp('6%'),
        marginHorizontal: wp('5%')
    },
    imgStl: {
        width: 24, height: 24, tintColor: DefaultStyles.colors.primary
    }

});