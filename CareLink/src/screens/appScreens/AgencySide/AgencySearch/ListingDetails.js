import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import { routes } from '../../../../Constants';

const ListingDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                rightImg={require('../../../../../assets/sendIcon.png')}
                onPressLeft={() => navigation.goBack()}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.messages })}
                headerLabel={"Listing Details"}
            />
            <ScrollView>
                <View style={styles.marginView} >
                    <Apptext style={styles.rms}> Job Details</Apptext>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.clientProfile)}>
                        <Apptext style={[styles.rms,
                        {
                            textDecorationLine: 'underline',
                            color: DefaultStyles.colors.primary,
                            fontFamily: 'Poppins-Regular'
                        }]}>
                            Client's Profile</Apptext>
                    </TouchableOpacity>
                </View>

                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> Rooms : </Apptext>
                    <Apptext> 3 Rooms</Apptext>
                </View>
                {/* Section Ends Here */}

                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> Floor : </Apptext>
                    <Apptext> 3rd</Apptext>
                </View>
                {/* Section Ends Here */}
                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> When : </Apptext>
                    <Apptext> Right Now</Apptext>
                </View>
                {/* Section Ends Here */}

                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> For : </Apptext>
                    <Apptext> 20 Days</Apptext>
                </View>
                {/* Section Ends Here */}

                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> Price : </Apptext>
                    <Apptext> $20-70 Hourly</Apptext>
                </View>
                {/* Section Ends Here */}

                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> Location  : </Apptext>
                    <Apptext>  abc Town , Washington, DC</Apptext>
                </View>
                {/* Section Ends Here */}

                {/* Section */}
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> Note :     </Apptext>
                    <Apptext style={styles.loremTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam nibh porta ante.</Apptext>
                </View>
                {/* Section Ends Here */}
                <View>
                    <View style={styles.pinkBox} >
                        <Apptext style={styles.pinkboxTxt}>
                            Kitchen available
                        </Apptext>
                    </View>
                    <View style={styles.pinkBox} >
                        <Apptext style={styles.pinkboxTxt}>
                            Car Parking available
                        </Apptext>
                    </View>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity>
                        <Image style={styles.hrtImg}
                            source={require('../../../../../assets/heart.png')} />
                    </TouchableOpacity>
                    <View style={{ marginTop: wp('5%') }}>
                        <FormButton
                            width={wp('75%')}
                            buttonTitle={"Submit Proposal"}
                            onPress={() => navigation.navigate(routes.sendProposal)}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ListingDetails;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'), marginHorizontal: wp('5%')
    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    rms: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16
    },
    jobsTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginLeft: wp('5%')
    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
    marginView: {
        marginHorizontal: wp('5%'),
        marginTop: wp('4%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    pinkBox: {
        backgroundColor: DefaultStyles.colors.lightPrimary,
        marginTop: wp('5%'),
        borderRadius: 6,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('23%')
    },
    pinkboxTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 90
    },
    loremTxt: {
        width: wp('70%'), marginTop: wp('1%'),
        fontSize: 12
    },
    hrtImg: {
        width: 40, height: 33
    }



});