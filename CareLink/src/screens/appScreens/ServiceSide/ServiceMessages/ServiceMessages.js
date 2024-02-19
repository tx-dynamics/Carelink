import React, { useState } from 'react';
import { StyleSheet, ScrollView, FlatList, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import InboxComp from '../../../../components/InboxComp';
import { DrawerActions } from '@react-navigation/native'
import { heightPixel, widthPixel } from '../../../../Constants';
import { appIcons } from '../../../../Constants/Utilities/assets';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import colors from '../../../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';


const ServiceMessages = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const [search, setSearch] = useState("")
    const DATAService = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "+5",
            label: "XYZ Rental Agency",
            msg: "Hi Jackson, can you tell …",
            Img: appIcons.dummyPic2,
            dt: "5 min ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'New Rental Agency',
            msg: "Will do, super, thank you",
            Img: appIcons.dummyPic1,
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Black Pearl Agency',
            msg: "Will do, super, thank you",
            Img: appIcons.dummyPic3,
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Gold offer Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Pay less Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Utility Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Downtown Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Silver Hawk Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Gain Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Country yard Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Level one Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Tech pro Agency',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/photo.png"),
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Easy locate Agency',
            msg: "Will do, super, thank you",
            Img: appIcons.dummyPic3,
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Super care Agency',
            msg: "Will do, super, thank you",
            Img: appIcons.dummyPic2,
            dt: "2 hrs ago",
            move: "Detail",
            online: false
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Feel home Agency',
            msg: "WWill do, super, thank you",
            Img: appIcons.dummyPic1,
            dt: "2 hrs ago",
            move: "Detail",
            online: true
        },
    ];
    const DATAAgency = [
        {
            id: 1,
            label: "James Clear",
            msg: "Hi Jackson, can you tell …",
            dt: "12 mins ago",
            Img: appIcons.dummyPic2,
            online: true

        },
        {
            id: 1,
            label: "James Hype",
            msg: "Hi Jackson, can you tell …",
            dt: "2 mins ago",
            Img: appIcons.dummyPic1,
            online: false
        },
        {
            id: 1,
            label: "John Doe",
            msg: "Hi Jackson, can you tell …",
            dt: "23 mins ago",
            Img: appIcons.dummyPic3,
            online: true
        },
        {
            id: 1,
            label: "Camron",
            msg: "Hi Jackson, can you tell …",
            dt: "29 mins ago",
            Img: appIcons.dummyPic2,
            online: false
        },
        {
            id: 1,
            label: "Diana Brian",
            msg: "Hi Jackson, can you tell …",
            dt: "31 mins ago",
            Img: appIcons.dummyPic3,
            online: false
        },
        {
            id: 1,
            label: "Jasmine Grey",
            msg: "Hi Jackson, can you tell …",
            dt: "1 hrs ago",
            Img: appIcons.dummyPic1,
            online: true
        },
        {
            id: 1,
            label: "Zaur",
            msg: "Hi Jackson, can you tell …",
            dt: "2 hrs ago",
            Img: appIcons.dummyPic2,
            online: false
        },
        {
            id: 1,
            label: "Tom Hanks",
            msg: "Hi Jackson, can you tell …",
            dt: "4 hrs ago",
            Img: appIcons.dummyPic1,
            online: true
        },
        {
            id: 1,
            label: "Domenic",
            msg: "Hi Jackson, can you tell …",
            dt: "4 hrs ago",
            Img: appIcons.dummyPic3,
            online: false
        },
        {
            id: 1,
            label: "Morgan",
            msg: "Hi Jackson, can you tell …",
            dt: "10 hr ago",
            Img: appIcons.dummyPic2,
            online: true
        },
        {
            id: 1,
            label: "Jason Brown",
            msg: "Hi Jackson, can you tell …",
            dt: "10 hrs ago",
            Img: appIcons.dummyPic3,
            online: false
        },
        {
            id: 1,
            label: "Philips Nick",
            msg: "Hi Jackson, can you tell …",
            dt: "11 hrs ago",
            Img: appIcons.dummyPic1,
            online: true
        },
        {
            id: 1,
            label: "Johnny Gibs",
            msg: "Hi Jackson, can you tell …",
            dt: "12 mins ago",
            Img: appIcons.dummyPic2,
            online: false
        },
    ];
    let DATA = usertype == "ServiceSide" ? DATAService : DATAAgency
    return (
        <View style={styles.container}>
            <Header
                headerLabel={"Inbox"}
                rightImg={usertype == "ServiceSide" ? appIcons.thirdTab : false}
                leftImgStyle={styles.leftImgStyle}
                rightImgStyle={styles.rightImgStyle}
                leftImgName={usertype == "ServiceSide" ? appIcons.drawerIcon : appIcons.leftArrow}
                onPressLeft={() => usertype == "ServiceSide" ? navigation.dispatch(DrawerActions.toggleDrawer()) : navigation.goBack()}
            />
            <KeyboardAwareScrollView>
                <SearchComponent onChangeText={(item) => setSearch(item)} />
                <View style={{ marginTop: heightPixel(10) }}>
                    <FlatList scrollEnabled={false}
                        ListHeaderComponent={() => <View style={{ marginTop: heightPixel(20) }}></View>}
                        data={DATA?.filter(data => data?.label?.toLowerCase()?.includes(search.toLowerCase()))}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <InboxComp
                                online={appIcons.online}
                                tintColor={item?.online ? null : colors.gray}
                                time={item.dt}
                                image={item.Img}
                                label={item.label}
                                message={item.msg}
                                onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ServiceChatDetail", params: { isContract: false } })}
                            />
                        )}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default ServiceMessages;

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
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