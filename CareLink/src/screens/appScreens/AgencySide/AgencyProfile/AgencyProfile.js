import React, { useState, useEffect } from 'react';
import {
    View, TouchableOpacity, FlatList, ActivityIndicator,
    TextInput, Alert, Image, StyleSheet, ScrollView,
}
    from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import BackgroundHeader from '../../../../components/BackgroundHeader';
import ReviewsComp from '../../../../components/ReviewsComp';

const Profile = ({ navigation }) => {


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "Debit/Credit Card",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "PayPal",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <BackgroundHeader
                backImg={require('../../../../../assets/back.png')}
                leftImgName={require('../../../../../assets/headerBack.png')}
                rightImg={require('../../../../../assets/dots.png')}
                onPressLeft={() => navigation.goBack()}


            />
            <View style={styles.whiteView}>
                <View style={styles.imgBox} >
                    <Image source={require('../../../../../assets/photo.png')} />
                    <TouchableOpacity style={styles.cameraView}>
                        <Image source={require('../../../../../assets/camera.png')} />
                    </TouchableOpacity>
                </View>

                    <Apptext style={styles.imgTxt} >ABC Rental Agency</Apptext>
                    <View style={{marginTop:-6,alignSelf: 'center' }}>
                        <Image source={require('../../../../../assets/stars.png')} />
                    </View>

                    <Apptext style={styles.mngTxt} >Manage 90+ Rental Propoerties in the city</Apptext>
                    <Apptext style={[styles.mngTxt, { marginTop: wp('2%') }]} >5+ Years experience</Apptext>
                    <View style={styles.txtView}>
                        <Apptext style={styles.rms} >About</Apptext>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate("RoomsProposals")}
                        >
                            <Apptext style={styles.dtls} >Edit your about</Apptext>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.paraView}>
                        <Apptext style={styles.para} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat, erat quis commodo facilisis ultricies. Aliquam semper eget dictumst donec elit in.</Apptext>
                    </View>
                    <View style={styles.txtView}>
                        <Apptext style={styles.rms} >Location</Apptext>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate("RoomsProposals")}
                        >
                            <Apptext style={styles.dtls} >Edit your Location</Apptext>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.paraView}>
                        <Apptext style={styles.para} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Apptext>
                    </View>


                    <Image
                        style={styles.mapImg}
                        source={require('../../../../../assets/profileMao.png')} />
                    <View style={styles.txtView}>
                        <Apptext style={styles.rms} >Reviews</Apptext>
                    </View>
                    <View style={{ marginTop: wp('5%') }}>
                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <ReviewsComp
                                    showProposals={true}
                                    labelValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sollicitudin euismod arcu praesent vulputate arcu eget. Elit tempor vitae tellus laoreet ante libero tortor."}
                                    name={"Tebasy C."}
                                    when={"Would rehire"}
                                    fors={"Punctual"}
                                    hourly={"Dependable"}
                                    location={"Feb 28th, 2021"}
                                />
                            )}
                        />
                        
                    </View>


            </View>

        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DefaultStyles.colors.white,
    },
    whiteView: {
        width: wp('100%'),
        // height: wp('100%'),
        // marginTop: -20,
        backgroundColor: "white",
    },
    imgBox: {
        width: 164,
        marginTop: -150,
        height: 164,
        borderWidth: 0.2,
        borderColor: "lightgray",
        borderRadius: 20,
        alignSelf: 'center'
    },
    cameraView: {
        width: 51,
        height: 51,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: -40,
        marginHorizontal: wp('35%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 3,
    },
    imgTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        alignSelf: 'center',
        // backgroundColor:"red",
        marginTop: wp('2%')
    },
    mngTxt: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        width: wp('95%'),
        marginTop: 5,
        alignSelf: 'center'
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'), marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    dtls: {
        color: DefaultStyles.colors.black,
        fontSize: 11,
        textDecorationLine: 'underline',
    },
    paraView: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('2%')
    },
    para: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    mapImg: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('8%'),
        borderRadius: 15
    }
});