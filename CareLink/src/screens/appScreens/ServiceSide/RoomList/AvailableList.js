import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import colors from '../../../../config/colors'
import { iconPath } from '../../../../config/icon'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'
import { appIcons } from '../../../../Constants/Utilities/assets'
import { heightPixel, routes } from '../../../../Constants'
import ServiceListingComp from '../../../../components/ServiceListingComp'
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView'
import { useRoute } from '@react-navigation/native'


export const ListedData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        status: "Available",
        description: `You will get 20 listing to post in a month with this monthly plan`,
        pic: appIcons.dummyPic1,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },
            {
                id: 2,
                title: "Car parking"
            },

        ]
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
        status: "Booked",
        description: `You will get 20 listing to post in a month with this monthly plan`,
        pic: appIcons.dummyPic2,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },
            {
                id: 2,
                title: "Car parking"
            },

        ]
    },

    {
        id: 'bd7asdaac4bea-c1b1-46c2-aed5-3ad53abb28ba',
        status: "Inactive",
        description: `You will get 20 listing to post in a month with this monthly plan`,
        pic: appIcons.dummyPic3,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },

        ]
    },
    {
        id: 'bd7ac4bea-cjgtr1b1-46c2-aed5-3ad53abb28ba',
        adress: "Magnolia Meadows",
        status: "Booked",
        description: `You will get 20 listing to post in a month with this monthly plan`,
        pic: appIcons.dummyPic3,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },

        ]
    },
    {
        id: 'bd7ac4bea-c1b1-3r4we46c2-aed5-3ad53abb28ba',
        adress: "Magnolia Meadows",
        status: "Avalaible",
        description: `You will get 20 listing to post in a month with this monthly plan`,
        pic: appIcons.dummyPic3,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },

        ]
    },
    {
        id: 'bd7ac4bea-c1b1-46c2-123123aed5-3ad53abb28ba',
        adress: "Magnolia Meadows",
        status: "Inactive",
        description: `You will get 20 listing to post in a month with this monthly plan`,
        pic: appIcons.dummyPic3,
        facility: [
            {
                id: 1,
                title: "Wheelchair"
            },

        ]
    },
];
const AvailableList = ({ navigation }) => {
    // hooks
    const {Roomdata}=useRoute()?.params;
    console.log("params ", JSON.stringify(Roomdata,' ',2))



    return (
        <AppGLobalView >
            <IconHeaderComp
                title={"Available"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <LeftSideBoldHeading title={"Available"} number={Roomdata?.length} />
            <FlatList showsVerticalScrollIndicator={false}
                style={{
                    paddingVertical: heightPixel(10)
                }}
                ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                data={Roomdata}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <ServiceListingComp
                        rightTexPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.listingOptions })}
                        // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.availableRoom })}
                        facilityData={item.entities}
                        pic={item.photos[0]}
                        rightTxt={"Edit"}
                        detail={item?.notes}
                        showProposals={true}
                        labelValue={[item?.availabilityStart,item?.availabilityEnd]}
                        name={item?.rooms[0]?.room}
                    // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
                    />
                )}
            />
        </AppGLobalView>
    )
}

export default AvailableList

const styles = StyleSheet.create({})