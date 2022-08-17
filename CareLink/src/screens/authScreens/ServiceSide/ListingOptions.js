import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';


const ListingOptions = ({ navigation }) => {

    const [isKitchen, setKitchen] = useState(false)
    const [isParking, setParking] = useState(false)

    return (
        <ScrollView style={styles.container}>
          
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Choose the options aboout your listing"}
            />
            <View>
                <Apptext style={[styles.bedsTxt]}>How many bedrooms and bathrooms? </Apptext>
            </View>
            <View style={styles.DirectionView}>
                <View style={styles.boxesView}>
                    <TouchableOpacity>
                        <Image source={require('../../../../assets/arrowUp.png')} />
                    </TouchableOpacity>
                    <Apptext style={styles.numberTxt} >2</Apptext>
                    <TouchableOpacity>
                        <Image source={require('../../../../assets/arrowDown.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxesView}>
                    <TouchableOpacity>
                        <Image source={require('../../../../assets/arrowUp.png')} />
                    </TouchableOpacity>
                    <Apptext style={styles.numberTxt} >2</Apptext>
                    <TouchableOpacity>
                        <Image source={require('../../../../assets/arrowDown.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.DirectionView, { marginTop: wp('6%') }]}>
                <Apptext style={styles.descTxt}>Bedrooms</Apptext>
                <Apptext style={styles.descTxt}>Bathrooms </Apptext>
            </View>
            <View>
                <Apptext style={[styles.bedsTxt]}>Check the available things </Apptext>
            </View>
            <View style={styles.DirectionView}>
                <TouchableOpacity
                    onPress={() => {
                        setKitchen(!isKitchen)
                    }}
                    style={styles.radioBtn}>
                    {isKitchen ?
                        <Image style={{ tintColor: DefaultStyles.colors.primary }} source={require('../../../../assets/tickBox.png')} />
                        : null}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setParking(!isParking)
                    }}
                    style={styles.radioBtn}>
                    {isParking ?
                        <Image style={{ tintColor: DefaultStyles.colors.primary }} source={require('../../../../assets/tickBox.png')} />
                        : null}
                </TouchableOpacity>
            </View>
            <View style={[styles.DirectionView, { marginTop: wp('3%') }]}>
                <Apptext style={styles.descTxt}>Car Parking </Apptext>
                <Apptext style={[styles.descTxt, { marginHorizontal: wp('5%') }]}>Wheelchair</Apptext>
            </View>
            <TouchableOpacity style={styles.inputContainer}>
                <View style={styles.cutView}>
                    <Apptext> Floor</Apptext>
                </View>
                <View style={styles.insideDropDowm}>
                    <Apptext style={styles.descTxt} >2nd</Apptext>
                    <Image style={{ marginHorizontal: wp('2%'), marginTop: -3 }}
                        source={require('../../../../assets/arrowDown.png')} />
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: wp('30%') }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    onPress={() => navigation.navigate("RoomsAvailable")}
                />
            </View>
        </ScrollView>
    )
}

export default ListingOptions;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    inputContainer: {
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        height: 48,
        marginTop: wp('12%'),
        borderWidth: 1,
        borderColor: DefaultStyles.colors.black
    },
    insideDropDowm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: wp('2%'),
        marginHorizontal: wp('5%')
    },
    cutView: {
        width: 41,
        marginTop: -20,
        marginHorizontal: wp('5%'),
        height: 20,
        backgroundColor: "white"
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    bedsTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
        width: wp('90%'),
        marginTop: wp('10%')
    },
    DirectionView: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    boxesView: {
        width: wp('25%'),
        marginTop: wp('9%'),
        alignItems: 'center',
    },
    numberTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 23,
        marginVertical: wp('4%')
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    radioBtn: {
        marginTop: wp('9%'),
        width: 30,
        height: 30,
        borderRadius: 10,
        borderColor: "lightgray",
        borderWidth: 1
    }
});