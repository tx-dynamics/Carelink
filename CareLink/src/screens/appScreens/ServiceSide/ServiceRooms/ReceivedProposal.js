import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import FormButton from '../../../../components/FormButton';
import { heightPixel, routes, widthPixel } from '../../../../Constants';
import AvailableFacilityComp from '../../../../components/AvaialableFacilityComp/AvailableFacilityComp';
import { appIcons } from '../../../../Constants/Utilities/assets';
import SimpleImageComponent from '../../../../components/SimpleImageComponent/SimpleImageComponent';
import DetailTextComp from '../../../../components/DetailTextComp/DetailTextComp';


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
    const availableFacility = [
        {
            id: 1,
            title: "Wheelchair",
        },
        {
            id: 2,
            title: "Car Parking available",
        },
        {
            id: 3,
            title: "Terrace",
        },
    ]
    const imageData = [
        {
            id: 1,
            pic: appIcons.dummyPic1,
        },
        {
            id: 2,
            pic: appIcons.dummyPic2,
        },
        {
            id: 3,
            pic: appIcons.dummyPic3,
        },
        {
            id: 4,
            pic: appIcons.dummyPic1,
        },
        {
            id: 5,
            pic: appIcons.dummyPic3,
        },
    ]
    return (
        <View style={styles.container}>
            <Header headerLabel={"Proposal"} height={heightPixel(80)} leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.marginView} >
                    <Apptext style={styles.rms} >Received Proposal</Apptext>
                </View>
                <View style={[styles.txtView, { marginTop: wp('9%') }]}>
                    <Apptext style={styles.rms} >Agency Details</Apptext>
                    {/* <TouchableOpacity style={styles.pinkBox}>
                        <Apptext style={styles.dtls} >Agency Details</Apptext>
                    </TouchableOpacity> */}
                </View>
                <View style={{ marginTop: wp('5%') }}>
                    <ServiceListingComp reviews onPress={() => navigation.navigate(routes.agencyDetail, { isChat: false })} pic={appIcons.dummyPic1}
                        showProposals={true}
                        showTags={false}
                        name={"ABC Rental Agency"}
                        location={"7+ Year Experience"}
                        rightTxt={""}
                    />
                </View>
                <View style={[styles.txtView]}>
                    <Apptext style={styles.rms} >Job Details</Apptext>
                </View>
                <View style={{ marginLeft: widthPixel(50) }}>
                    <DetailTextComp title={"Rooms"} detail={"3 Rooms"} />
                    <DetailTextComp title={"Floor"} detail={"3rd"} />
                    <DetailTextComp title={"For"} detail={"20 Days"} />
                </View>
                <View style={styles.directionView}>
                    <Apptext style={styles.jobsTxt}> Note :    </Apptext>
                    <Apptext style={styles.lrmTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam nibh porta ante.</Apptext>
                </View>
                <FlatList
                    horizontal
                    data={availableFacility}
                    style={styles.availableFlatlist}
                    renderItem={({ item, index }) => <AvailableFacilityComp title={item.title} />} />
                <View style={[styles.txtView, { marginTop: wp('9%') }]}>
                    <Apptext style={styles.rms} >Images</Apptext>
                </View>
                <FlatList
                    horizontal
                    data={imageData}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, indedx }) => <SimpleImageComponent pic={item.pic} disabled />}
                    style={{ alignSelf: "flex-start", marginTop: heightPixel(0), marginLeft: widthPixel(20) }} />
                <View style={[styles.txtView, { marginTop: heightPixel(20) }]}>
                    <Apptext style={styles.rms} >Proposals</Apptext>
                </View>
                <Apptext style={styles.sameTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus. Aliquam commodo, sed nunc tincidunt ultrices volutpat sem metus. Est, volutpat elit consectetur fames arcu elit interdum vivamus molestie. In dignissim eleifend massa euismod molestie risus, in. Eleifend volutpat, varius pulvinar purus ultricies sit at consectetur mauris. Ultrices vulputate nam molestie pellentesque lectus. Ut sem leo varius posuere pellentesque.
                </Apptext>
                <Apptext style={styles.sameTxt}>
                    A ultrices malesuada consequat metus etiam morbi augue donec praesent. Enim feugiat nisi, tristique sit eget sit nunc. Enim, gravida ut sed tincidunt pellentesque venenatis faucibus arcu. Mauris dui at egestas fringilla est ultrices curabitur at vitae. Nullam vitae quisque ipsum sit sit dolor convallis. Duis non turpis vestibulum id nulla. Mattis est etiam turpis cras sollicitudin. At sed suscipit eros, aliquet gravida eleifend morbi. Eleifend laoreet mauris scelerisque dui.
                </Apptext>
                {/* /////////////////////////////////////// */}
                <View style={{ marginTop: heightPixel(20) }}>
                    <FormButton
                        buttonTitle={"Reject"}
                        backgroundColor={"#e6e6e6"}
                        color={"black"}
                    />
                </View>
                <View style={{ marginTop: -7 }}>
                    <FormButton
                        buttonTitle={"Accept"}
                        color={"white"}
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ProposalTerms" })}
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
        paddingBottom: heightPixel(20)
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
        flexDirection: 'row',
        marginTop: heightPixel(10),
    },
    jobsTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginLeft: wp('5%')
    },
    pinkBox1: {
        backgroundColor: '#ffabff',
        marginTop: wp('5%'),
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('23%')
    },
    pinkboxTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10
    },
    lrmTxt: {
        width: wp('70%'), marginTop: wp('1%'), fontSize: 12
    },
    ktTxtView: {
        flexDirection: 'row', justifyContent: 'space-around',
        marginTop: 21, marginLeft: wp('15%')
    },
    sameTxt: {
        marginHorizontal: wp('5%'),
        marginTop: heightPixel(10)
    },
    availableFlatlist: {
        marginLeft: widthPixel(20),
        marginTop: heightPixel(20),
        alignSelf: "flex-start"
    },

});