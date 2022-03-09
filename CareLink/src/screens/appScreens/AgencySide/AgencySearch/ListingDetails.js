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


const ListingDetails = ({ navigation }) => {

    const [isValue, setValue] = useState('');
    const [isKitchen, setKitchen] = useState(false)
    const [isParking, setParking] = useState(false)


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
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                rightImg={require('../../../../../assets/sendIcon.png')}
                onPressLeft={() => navigation.goBack()}
                headerLabel={"Listing Details"}
            />
            <ScrollView>

                <View style={styles.marginView} >
                    <Apptext style={styles.rms}> Job Details</Apptext>
                    <TouchableOpacity onPress={() => navigation.navigate("ClientProfile")}>
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
                    <Apptext style={styles.jobsTxt}> Note : </Apptext>
                    <Apptext style={{ width: wp('70%'), fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam nibh porta ante.</Apptext>
                </View>
                {/* Section Ends Here */}
                <View>
                    <View style={styles.pinkBox} >
                    <Apptext style={styles.pinkboxTxt}>
                    Kitchen available
                    </Apptext>
                    </View>
                    {/* /////////////////////// */}
                    <View style={styles.pinkBox} >
                    <Apptext style={styles.pinkboxTxt}>
                    Car Parking available
                    </Apptext>
                    </View>
                </View>
                <View style={styles.btnView}>
                   <TouchableOpacity>
                    <Image style={{width:46, height:40}}
                    source={require('../../../../../assets/heart.png')} />
                   </TouchableOpacity>
                   <View style={{marginTop:wp('5%')}}>
                    <FormButton
                        width={wp('80%')}
                        buttonTitle={"Submit Proposal"}
                        onPress={() => navigation.navigate("SendProposal")}
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
        marginHorizontal: wp('5%')
    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
    marginView: {
        marginHorizontal: wp('5%'),
        marginTop: wp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    pinkBox:{
        backgroundColor:'#ffabff',
        marginTop:wp('5%'),
        borderRadius:6,
        // width:wp('45%'),
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:wp('23%')
    },
    pinkboxTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:14
    },
    btnView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        // backgroundColor:"red",
        marginTop: 90 
    }



});