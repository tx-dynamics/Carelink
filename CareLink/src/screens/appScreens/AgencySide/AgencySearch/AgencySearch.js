import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import { DrawerActions } from '@react-navigation/native'
import Header from '../../../../components/Header';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AgencySearch = ({ navigation }) => {
    const [isSearch, setSearch] = useState("")
    const DATA = [
        {
            id: 1,
            title: "James Clear",
            duration: 20,
            liked: true,
            posted: "12 mins ago",
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"

                },
                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "James Hype",
            duration: 23,
            liked: false,
            posted: "2 mins ago",
            facility: [
                {
                    id: 1,
                    title: "Terres"

                },
                {
                    id: 2,
                    title: "Wheelchair"

                },
            ]
        },
        {
            id: 1,
            title: "John Doe",
            duration: 34,
            liked: true,
            posted: "23 mins ago",
            facility: [
                {
                    id: 1,
                    title: "Security"

                },
                {
                    id: 2,
                    title: "Sports Hall"

                },
            ]
        },
        {
            id: 1,
            title: "Camron",
            duration: 21,
            liked: true,
            posted: "29 mins ago",
            facility: [
                {
                    id: 1,
                    title: "Swimming Pool"

                },
                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Diana Brian",
            duration: 56,
            liked: false,
            posted: "31 mins ago",
            facility: [
                {
                    id: 1,
                    title: "TV lounge"

                },
                {
                    id: 2,
                    title: "Kitchen"

                },
            ]
        },
        {
            id: 1,
            title: "Jasmine Grey",
            duration: 24,
            liked: true,
            posted: "1 hrs ago",
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"

                },
                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Zaur",
            duration: 11,
            liked: true,
            posted: "2 hrs ago",
            facility: [

                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Tom Hanks",
            duration: 42,
            liked: false,
            posted: "4 hrs ago",
            facility: [
                {
                    id: 1,
                    title: "Air Conditioner"

                },
                {
                    id: 2,
                    title: "Terres"

                },
            ]
        },
        {
            id: 1,
            title: "Domenic",
            duration: 17,
            liked: true,
            posted: "4 hrs ago",
            facility: [
                {
                    id: 1,
                    title: "House keeping"

                },
                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Morgan",
            duration: 44,
            liked: true,
            posted: "10 hr ago",
            facility: [
                {
                    id: 1,
                    title: "Security"

                },
                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Jason Brown",
            duration: 43,
            liked: true,
            posted: "10 hrs ago",
            facility: [

                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Philips Nick",
            duration: 43,
            liked: true,
            posted: "11 hrs ago",
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"

                },
                {
                    id: 2,
                    title: "Attach bathroom"

                },
            ]
        },
        {
            id: 1,
            title: "Johnny Gibssss",
            duration: 11,
            liked: false,
            posted: "12 mins ago",
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"

                },
            ]
        },
    ];
    return (
        <View style={styles.container}>
            <Header
                headerLabel={"Find Listing"}
                rightImg={appIcons.messageIcon}
                leftImgStyle={styles.leftImgStyle}
                rightImgStyle={styles.rightImgStyle}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                onPressRight={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.messages })} />
            <SearchComponent onChangeText={setSearch} containerStyle={{ marginVertical: heightPixel(20), }} />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <Apptext style={styles.rms} >Latest Listings</Apptext>
                <FlatList showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    data={DATA?.filter(data => data?.title?.toLowerCase()?.includes(isSearch.toLowerCase()))}
                    // ListFooterComponent={() => <View style={{ marginBottom: heightPixel(70) }}></View>}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => <CustomerListingComp
                        title={item.title}
                        rightDisable={true}
                        posted={item.posted}
                        duration={item.duration}
                        facilityData={item.facility}
                        rightIcon={item.liked ? appIcons.heartRed : appIcons.heartBlank}
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.roomDetails })}
                    />} />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default AgencySearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DefaultStyles.colors.white,
    },
    rms: {
        paddingHorizontal: widthPixel(20),
        fontFamily: 'Poppins-Medium',
        fontSize: fontPixel(20),
        marginBottom: heightPixel(10)
    },
    searchBar: {
        height: 47,
        width: wp('90%'),
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 9,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray"
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