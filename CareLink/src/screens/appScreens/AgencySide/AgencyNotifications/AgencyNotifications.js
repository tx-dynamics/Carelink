import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import NotificationsComp from '../../../../components/NotificationsComp';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { heightPixel, routes, widthPixel } from '../../../../Constants';
import { appIcons } from '../../../../Constants/Utilities/assets';

const AgencyNotifications = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            time: "3h ago",
            color: DefaultStyles.colors.primary,
            label: "You Proposal viewed james clear for 3 rooms listing",
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            time: "6h ago",
            color: DefaultStyles.colors.lightgray,
            label: "Congrats. Your proposal accepted clear for 3 rooms listing",
        },
        {
            id: 'bd447ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            time: "6h ago",
            color: DefaultStyles.colors.lightgray,
            label: "Congrats. Your proposal accepted clear for 3 rooms listing",
        },
    ];

    const DATA1 = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            time: "3h ago",
            color: DefaultStyles.colors.lightgray,
            label: "You Proposal viewed james clear for 3 rooms listing",
        },

        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            time: "6h ago",
            color: DefaultStyles.colors.lightgray,
            label: "Congrats. Your proposal accepted clear for 3 rooms listing",
        },
        {
            id: 'bd447ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            time: "6h ago",
            color: DefaultStyles.colors.lightgray,
            label: "Congrats. Your proposal accepted clear for 3 rooms listing",
        },
    ];

    return (
        <View style={styles.container}>
            <Header
                headerLabel={"Notifications"}
                rightImg={appIcons.messageIcon}
                leftImgStyle={styles.leftImgStyle}
                rightImgStyle={styles.rightImgStyle}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.messages })} />
            <View style={{ marginTop: wp('6%') }}>
                <Apptext style={styles.headTxt}>Today</Apptext>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <NotificationsComp
                            labelValue={item.label}
                            time={item.time}
                            color={item.color} />)} />
            </View>
            <View style={{ marginTop: wp('6%') }}>
                <Apptext style={styles.headTxt}>Yesterday</Apptext>
                <FlatList
                    data={DATA1}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <NotificationsComp
                            labelValue={item.label}
                            time={item.time}
                            color={item.color}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default AgencyNotifications;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    marginView: {
        marginHorizontal: wp('5%'),
        marginTop: wp('6%')
    },
    headTxt: {
        marginHorizontal: wp("7%"),
        marginBottom: wp('2%'),
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
    rightImgStyle: {
        width: widthPixel(32),
        height: widthPixel(32),
    },
});