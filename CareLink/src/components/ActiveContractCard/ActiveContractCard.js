import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import AvailableFacilityComp from '../AvaialableFacilityComp/AvailableFacilityComp'

const ActiveContractCard = ({ onPress, containerStyle, type, agency, provider, created }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.typeText}>{type}</Text>
            <Text style={styles.agencyText}>Agency: {agency}</Text>
            <Text style={styles.agencyText}>Provider: {provider}</Text>
            <View style={styles.bottomView}>
                <AvailableFacilityComp container={{ marginTop: heightPixel(1), }} title={"Active"} />
                <Text style={styles.createdText}>Created: {created}</Text>
            </View>
        </View>
    )
}

export default ActiveContractCard

const styles = StyleSheet.create({
    container: {
        marginBottom: heightPixel(10),
        paddingHorizontal: widthPixel(20),
        paddingVertical: widthPixel(10),
        width: widthPixel(374),
        borderRadius: widthPixel(10),
        backgroundColor: colors.white,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    typeText: {
        fontSize: fontPixel(19),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black
    },
    agencyText: {
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black
    },
    bottomView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    createdText: {
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Medium,
        color: colors.primary
    },
})