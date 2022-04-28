import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import FormButton from '../../../../components/FormButton';


const ReceivedProposal = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price: "$29.99",
            plans: "/month",
            label: "Debit/Credit Card",
            description: `You will get 20 listing to post in a month with this monthly plan`
        },
    ];


    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.marginView} >
                    <Apptext style={styles.rms} >Received Proposal</Apptext>
                </View>
                <View style={[styles.txtView, { marginTop: wp('9%') }]}>
                    <Apptext style={styles.rms} >Agency Details</Apptext>
                    <TouchableOpacity style={styles.pinkBox}>
                        <Apptext style={styles.dtls} >Agency Details</Apptext>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: wp('5%') }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <ServiceListingComp
                                showProposals={true}
                                showTags={false}
                                labelValue={"3 Room on 2nd Floor"}
                                name={"ABC Rental Agency"}
                                location={"7+ Year Experience"}
                                rightTxt={""}

                            />
                        )}
                    />
                </View>
                <View style={[styles.txtView]}>
                    <Apptext style={styles.rms} >Job Details</Apptext>
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
                    <Apptext style={styles.jobsTxt}> Note :    </Apptext>
                    <Apptext style={{ width: wp('70%'), marginTop: wp('1%'), fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam nibh porta ante.</Apptext>
                </View>
                {/* Section Ends Here */}

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around',
                    marginTop: 21, marginLeft: wp('15%')
                }}>
                    <View style={[styles.pinkBox, { backgroundColor: DefaultStyles.colors.lightPrimary  }]} >
                        <Apptext style={styles.pinkboxTxt}>
                            Kitchen available
                        </Apptext>
                    </View>
                    {/* /////////////////////// */}

                    <View style={[styles.pinkBox, { backgroundColor: DefaultStyles.colors.lightPrimary }]} >
                        <Apptext style={styles.pinkboxTxt}>
                            Car Parking available
                        </Apptext>
                    </View>
                </View>
                <View style={[styles.txtView, { marginTop: wp('9%') }]}>
                    <Apptext style={styles.rms} >Proposals</Apptext>

                </View>
                <Apptext style={{marginHorizontal:wp('5%'), marginTop:wp('6%')}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus. Aliquam commodo, sed nunc tincidunt ultrices volutpat sem metus. Est, volutpat elit consectetur fames arcu elit interdum vivamus molestie. In dignissim eleifend massa euismod molestie risus, in. Eleifend volutpat, varius pulvinar purus ultricies sit at consectetur mauris. Ultrices vulputate nam molestie pellentesque lectus. Ut sem leo varius posuere pellentesque.
                </Apptext>
                <Apptext style={{marginHorizontal:wp('5%'), marginTop:wp('6%')}}>
                A ultrices malesuada consequat metus etiam morbi augue donec praesent. Enim feugiat nisi, tristique sit eget sit nunc. Enim, gravida ut sed tincidunt pellentesque venenatis faucibus arcu. Mauris dui at egestas fringilla est ultrices curabitur at vitae. Nullam vitae quisque ipsum sit sit dolor convallis. Duis non turpis vestibulum id nulla. Mattis est etiam turpis cras sollicitudin. At sed suscipit eros, aliquet gravida eleifend morbi. Eleifend laoreet mauris scelerisque dui.
                </Apptext>
                {/* /////////////////////////////////////// */}

                <View style={{marginTop:wp('13%')}}>
                    <FormButton
                    width={wp('90%')}
                    buttonTitle={"Reject"}
                    backgroundColor={"#e6e6e6"}
                    color={"black"}
                    />
                </View>
                <View style={{marginTop:-7}}>
                    <FormButton
                    width={wp('90%')}
                    buttonTitle={"Accept"}
                    color={"white"}
                    onPress={() => navigation.navigate("withoutBottomTabnavigator",{screen:"ProposalTerms"})}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default ReceivedProposal;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('3%'), marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16
    },
    pinkBox:
    {
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 5,
        padding: 3
    },
    dtls: {
        color: DefaultStyles.colors.white,
        fontSize: 11
        // textDecorationLine: 'underline',
    },
    marginView: {
        marginHorizontal: wp('5%'),
        marginTop: -5
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    searchBar: {
        height: 47,
        width: wp('90%'),
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: wp('4%'),
        borderRadius: 9,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray"

    },
    directionView: {
        flexDirection: 'row', marginTop: wp('6%'),
    },
    jobsTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginLeft: wp('5%')
        // marginHorizontal: wp('5%')
    },
    pinkBox1: {
        backgroundColor: '#ffabff',
        marginTop: wp('5%'),
        borderRadius: 6,
        // width:wp('45%'),
        // padding:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('23%')
    },
    pinkboxTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10
    },

});