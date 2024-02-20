import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import colors from '../../../../config/colors'
import { iconPath } from '../../../../config/icon'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'
import { heightPixel, routes } from '../../../../Constants'
import ServiceListingComp from '../../../../components/ServiceListingComp'
import { ListedData } from './AvailableList'

const ListedList = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white,
        }}>
            <IconHeaderComp
                title={"Listed"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <LeftSideBoldHeading title={"Listed"} number={ListedData?.length} />
            <FlatList showsVerticalScrollIndicator={false}
                style={{
                    paddingVertical: heightPixel(10)
                }}
                ListHeaderComponent={() => <View style={{ marginTop: heightPixel(1) }}></View>}
                data={ListedData}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <ServiceListingComp
                        statusStyle={{ backgroundColor: item.status == "Inactive" ? colors.inactiveColor : item.status == "Available" ? colors.completeColor : colors.primary }}
                        statusTab={item.status}
                        rightTexPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.listingOptions })}
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.availableRoom })}
                        facilityData={item.facility}
                        pic={item.pic}
                        // rightTxt={"Edit"}
                        detail={"Lorem ipsum dolor sit amet, c amet, c Lorem ipsum dolor sit amet, c "}
                        showProposals={true}
                        labelValue={"For 20 days"}
                        name={"ABC Rental Agency"}
                    // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
                    />
                )}
            />
        </View>
    )
}

export default ListedList

const styles = StyleSheet.create({})