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


const ServiceMessages = ({ navigation }) => {
    const [search, setSearch] = useState("")
    const DATA = [
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

    return (
        <View style={styles.container}>
            <Header isBack height={heightPixel(80)} leftImgStyle={styles.leftImgStyle} rightImg={appIcons.thirdTab}
                leftImgName={require('../../../../../assets/drawerIcon.png')}
                onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ScrollView>
                <View style={styles.marginView} >
                    <Apptext style={styles.rms} >Messages</Apptext>
                </View>
                <SearchComponent onChangeText={(item) => setSearch(item)} />
                <View style={{ marginTop: wp('2%') }}>
                    <FlatList
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
            </ScrollView>
        </View>
    )
}

export default ServiceMessages;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
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
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
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
    srchImg: {
        width: 15, height: 15, tintColor: "lightgray", marginHorizontal: 20
    },
    srchTxt: {
        color: 'grey', marginLeft: -10, width: wp('70%')
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
});