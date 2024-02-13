import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const AvailableFacilityComp = ({ container, title }) => {
    return (
        <View style={[styles.container, container]}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default AvailableFacilityComp

const styles = StyleSheet.create({
    container: {
        height: heightPixel(20),
        marginTop: heightPixel(10),
        paddingHorizontal: widthPixel(10),
        backgroundColor: colors.lightPrimary,
        justifyContent: "center",
        marginRight: widthPixel(10),
        alignItems: "center",
        borderRadius: widthPixel(5),
        alignSelf: "flex-start",
    },
    titleText: {
        top: heightPixel(1),
        fontSize: fontPixel(11),
        fontFamily: fonts.Poppins_Light,
        color: colors.availableFacilityText
    },
})