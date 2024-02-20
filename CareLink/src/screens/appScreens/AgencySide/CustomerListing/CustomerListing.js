import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar'
import { heightPixel, routes } from '../../../../Constants'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import { appIcons } from '../../../../Constants/Utilities/assets'
import Header from '../../../../components/Header'
import { agencyData } from '../AgencyHome/AgencyHome'
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp'

const CustomerListing = ({ navigation, route }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <AppStatusbar />
            <Header headerLabel={"Customer Listing"} height={heightPixel(80)} leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()} />
            <FlatList showsVerticalScrollIndicator={false}
                data={agencyData}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => <CustomerListingComp
                    title={item.adress}
                    duration={item.duation}
                    facilityData={item.facility}
                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.roomDetails })} />} />
        </View>
    )
}

export default CustomerListing

const styles = StyleSheet.create({})