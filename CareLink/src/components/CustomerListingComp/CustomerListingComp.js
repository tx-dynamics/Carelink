import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import AvailableFacilityComp from '../AvaialableFacilityComp/AvailableFacilityComp'
const CustomerListingComp = ({ onPress, title, duration, facilityData }) => {
    return (
        <Pressable onPress={onPress} style={{
            marginTop: heightPixel(1),
            marginBottom: heightPixel(10),
            alignSelf: "center",
            backgroundColor: colors.white,
            width: widthPixel(374),
            height: heightPixel(105),
            borderRadius: widthPixel(7),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            paddingLeft: widthPixel(20)
        }}>
            <Text style={{
                marginTop: heightPixel(8),
                fontSize: fontPixel(19),
                fontFamily: fonts.Poppins_Regular,
                color: colors.black
            }}>{title}</Text>
            <Text style={{
                fontSize: fontPixel(13),
                fontFamily: fonts.Poppins_Regular,
                color: colors.black
            }}>{"for " + duration + " days"}</Text>
            <FlatList horizontal style={{ marginTop: heightPixel(5) }}
                data={facilityData} renderItem={({ item, index }) => <AvailableFacilityComp title={item.title} />} />
        </Pressable>
    )
}

export default CustomerListingComp

const styles = StyleSheet.create({})