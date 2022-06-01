import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import AgencyHomeComp from '../../../../components/AgencyHomeComp';
import FvrtComp from '../../../../components/FvrtComp';
import LatestListingsComp from '../../../../components/LatestListingsComp';
import SelectBox from '../../../../components/SelectBox';


const ClientProfile = ({ navigation }) => {

    const [isValue, setValue] = useState('');
    const [isKitchen, setKitchen] = useState(false)
    const [isParking, setParking] = useState(false)


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "6",
            plans: "/month",
            label: "Available Rooms",
            color:DefaultStyles.colors.primary,
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "11",
            plans: "/month",
            color:'#999999',
            label: "Booked Rooms",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                rightImg={require('../../../../../assets/sendIcon.png')}
                onPressLeft={() => navigation.goBack()}
                headerLabel={"Client Profile"}
            />
                <TouchableOpacity style={styles.imgView} >
                    <Image style={{ width: wp('30%'), height: wp('30%') }}
                        source={require('../../../../../assets/JC.png')} />
                </TouchableOpacity>
                <View style={{ alignSelf: 'center' }} >
                    <Apptext style={styles.jmsTxt} >James Clear</Apptext>
                    <Apptext style={styles.dcTxt} >Washington, DC</Apptext>
                </View>
                <View style={styles.pinkBox}>
                    <Apptext style={styles.mmbrTxt} >Member since October 2021</Apptext>
                    <Apptext style={styles.mmbrTxt} >Hired 5 providers</Apptext>
                </View>
                <Apptext style={styles.acntTxt}>Account Details</Apptext>
                <View style={{ marginTop: wp('3%') }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <SelectBox
                                leftTitle={item.label}
                                count={item.count}
                                backgroundColor={item.color}
                            />

                        )}
                    />
                </View>
        </View>
    )
}

export default ClientProfile;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    imgView: {
        width: wp('30%'),
        marginTop: wp('7%'),
        height: wp('30%'),
        alignSelf: 'center',
        // backgroundColor:"red",
        borderRadius: 60
    },
    jmsTxt: {
        marginTop: wp('6%'),
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    },
    dcTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        alignSelf: 'center'
    },
    pinkBox: {
        width: 200,
        // height:55,
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
    acntTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        marginTop: wp('5%'),
        alignSelf: 'center',
        color: DefaultStyles.colors.primary,
        textDecorationLine: 'underline'
    }




});