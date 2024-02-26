import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View, FlatList } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { fontPixel, heightPixel, routes, widthPixel } from '../../../Constants';
import { fonts } from '../../../Constants/Fonts';
import colors from '../../../config/colors';
import { appIcons } from '../../../Constants/Utilities/assets';
import HeaderForSpace from '../../../components/HeaderForSpace/HeaderForSpace';

const Success = ({ navigation }) => {
    const listData = [
        {
            id: 1,
            title: "Build a agency profile to show the world what you can offer ",
            pic: appIcons.man
        },
        {
            id: 2,
            title: "Apply for open roles or list services for clients to buy",
            pic: appIcons.openmsg
        },
        {
            id: 3,
            title: "Get paid safely and know we’re there to help",
            pic: appIcons.dollar
        },
    ]
    return (
        <View style={styles.container}>
            <View>
                <IconHeaderComp
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow}
                    heading={"You have created account successfully!"}
                />
                <View style={styles.DirectionView}>
                    <Image
                        style={styles.tntClr}
                        source={require('../../../../assets/circleProfile.png')} />
                    <Apptext style={styles.smallTxt} >Now complete your agency profile</Apptext>
                </View>
                <FlatList showsVerticalScrollIndicator={false}
                    data={listData}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={() => <HeaderForSpace />}
                    renderItem={({ item, index }) => <List pic={item.pic} title={item.title} />} />
            </View>
            <FormButton
                buttonTitle={"Start Now"}
                onPress={() => { navigation.navigate(routes.agencyBasic) }}
            />
        </View>
    )
}
const List = ({ pic, title }) => {
    return (
        <View style={styles.listContainer}>
            <Image resizeMode='contain'
                style={styles.listPic}
                source={pic} />
            <Apptext style={styles.smallTxt2} >{title}</Apptext>
            <Apptext style={styles.divider}> </Apptext>
        </View>
    )
}
export default Success;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    DirectionView: {
        alignItems: 'center',
        marginTop: wp('9%')
    },
    smallTxt: {
        marginTop: wp('7%'),
        fontSize: fontPixel(19)
    },
    smallTxt2: {
        marginTop: heightPixel(10),
        fontSize: fontPixel(13),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        textAlign: "center",

    },
    divider: {
        marginTop: 13,
        height: 1,
        width: wp('90%'),
        backgroundColor: "#C3C3C3",
    },
    tntClr: {
        width: widthPixel(72),
        height: widthPixel(72),
        tintColor: DefaultStyles.colors.primary
    },
    listContainer: {
        alignItems: "center",
        marginBottom: heightPixel(20),
        paddingHorizontal: widthPixel(20)
    },
    listPic: {
        width: widthPixel(35),
        height: widthPixel(35),
    },
});