import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import SelectBox from '../../../../components/SelectBox';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { appIcons } from '../../../../Constants/Utilities/assets';
import { heightPixel, routes, widthPixel } from '../../../../Constants';
import NewSelectBox from '../../../../components/NewSelectBox/NewSelectBox';
import colors from '../../../../config/colors';
import SubscriptionBox from '../../../../components/SubscriptionBox/SubscriptionBox';
import { useDispatch } from 'react-redux';
import { fromProfile } from '../../../../redux/Slices/appSlice';
import ProfileTopComp from '../../../../components/ProfileTopComp/ProfileTopComp';

const ServiceClientProfile = ({ navigation }) => {
    const dispatch = useDispatch()
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "6",
            forward: false,
            title: "Available Rooms",
            route: routes.availableList,
        },
        {
            id: 'bd7acbea-c1b1-4qds6c2-aed5-3ad53abb28ba',
            count: "11",
            forward: false,
            title: "Booked Rooms",
            route: routes.bookedList,
        },
        {
            id: 'bd7acbea-c1b1-46c2123-aed5-3ad53abb28ba',
            forward: true,
            title: "Certificates",
            route: routes.userCertificateList,
        },

    ];
    const onSubscriptionPress = () => {
        dispatch(fromProfile(true))
        navigation.navigate("withoutBottomTabnavigator", { screen: "PaymentPlans" })
    }
    return (
        <View style={styles.container}>
            <Header isBack headerLabel={"Profile"} height={heightPixel(80)} leftImgStyle={styles.leftImgStyle} rightImg={appIcons.setting} rightImgStyle={{
                width: widthPixel(40),
                height: widthPixel(25),
                tintColor: colors.black
            }}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.setting })}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.txtView}>
                    <Apptext style={styles.rms} >Profile</Apptext>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "EditProfile" })}>
                        <Apptext style={styles.dtls} >Edit</Apptext>
                    </TouchableOpacity>
                </View>
                <ProfileTopComp name={"James Clear"} pic={appIcons.dummyPic1} memberDuration={"October 2023"} />
                <TouchableOpacity onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.listingOptions })} style={styles.btn}>
                    <Apptext style={styles.acntTxt}>List a room</Apptext>
                </TouchableOpacity>
                <FlatList scrollEnabled={false} showsVerticalScrollIndicator={false}
                    data={DATA}
                    ListHeaderComponent={() => <View style={{ marginTop: heightPixel(2) }}></View>}
                    renderItem={({ item, index }) =>
                        <NewSelectBox
                            circleStyle={{ backgroundColor: index == 1 && colors.bookedCircle }}
                            title={item.title}
                            count={item.count}
                            forward={item.forward}
                            onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: item.route })}
                        />} />
                <SubscriptionBox onPress={onSubscriptionPress} title={"Subscription"} count={"20"} subtitle={"Listings Monthly"} rightText={"Upgrade"} />
            </ScrollView>
        </View>
    )
}

export default ServiceClientProfile;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    btn: {
        backgroundColor: DefaultStyles.colors.primary,
        borderRadius: 30,
        width: 103,
        alignSelf: 'center',
        padding: 5,
        marginVertical: heightPixel(20),

    },
    acntTxt: {
        top: heightPixel(1),
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        alignSelf: 'center',
        color: DefaultStyles.colors.white,
    },
    txtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: wp('1%'),
        marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    dtls: {
        color: DefaultStyles.colors.black,
        textDecorationLine: 'underline',
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
});