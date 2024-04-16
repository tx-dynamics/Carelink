import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import LatestListingsComp from '../../../../components/LatestListingsComp';
import { appIcons } from '../../../../Constants/Utilities/assets';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { fonts } from '../../../../Constants/Fonts';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';
import { RedFlashMessage } from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';


const SavedListing = ({ navigation }) => {
    const [isSearch, setSearch] = useState("")
    const [visible, setVisible] = useState(false)
    const [isIndex, setIndex] = useState(0)
    const [DATA, setData] = useState([
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
            liked: true,
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
            liked: true,
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
            liked: true,
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
            title: "Johnny Gibs",
            duration: 11,
            liked: true,
            posted: "12 mins ago",
            facility: [
                {
                    id: 1,
                    title: "Wheelchair"

                },
            ]
        },
    ]);
    const heartPress = (index) => {
        setIndex(index)
        setVisible(true)
    }
    const onRemovePress = () => {
        DATA.splice(isIndex, 1)
        setData([...DATA])
        RedFlashMessage("Listing Removed")
        setVisible(false)
    }
    return (
        <AppGLobalView style={styles.container}>
            <Header
                headerLabel={"Saved Listings"}
                leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()}
            />
            <SearchComponent onChangeText={setSearch} containerStyle={{ marginBottom: heightPixel(15), }} />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <Apptext style={styles.rms} >Saved Listings</Apptext>
                <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} data={DATA?.filter(data => data?.title?.toLowerCase()?.includes(isSearch.toLowerCase()))}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => <CustomerListingComp
                        title={item.title}
                        posted={item.posted}
                        rightPress={heartPress}
                        duration={item.duration}
                        facilityData={item.facility}
                        rightIcon={appIcons.heartRed}
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.roomDetails })}
                    />} />
            </KeyboardAwareScrollView>
            <DeleteModal cancelPress={() => setVisible(false)} deletePress={onRemovePress} rightButtonTitle={"Remove"} visible={visible} title={"Are you sure you want to remove from saved listing"} />
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.marginView}>
                    <View style={{ flexDirection: 'row', marginTop: -25, justifyContent: 'space-between' }}>
                        <Apptext style={styles.rms} >Saved Listings</Apptext>
                    </View>
                    <View style={{ marginTop: 21 }}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <LatestListingsComp
                                    labelValue={"3 Room on 2nd Floor"}
                                    when={"Right Now"}
                                    rightImg={require('../../../../../assets/fillHeart.png')}
                                    showHrt={true}
                                    fors={"For 20 days"}
                                    hourly={"$20 - 70 Hourly"}
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator",
                                        { screen: "ListingDetails" })}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView> */}
        </AppGLobalView>
    )
}

export default SavedListing;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    rms: {
        paddingHorizontal: widthPixel(20),
        fontFamily: fonts.Poppins_Medium,
        fontSize: fontPixel(17),
        marginBottom: heightPixel(10)
    },

});