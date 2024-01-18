import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'
import { appIcons } from '../../Constants/Utilities/assets'

const AvailableComponent = ({ monthStart, dateStart, dateEnd, montEnd }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.availableText}>Available</Text>
            <View style={styles.subView}>
                <Image resizeMode='contain' source={appIcons.calendar} style={styles.calendarImage} />
                <Text style={styles.dateText1}><Text>{monthStart}</Text> <Text style={styles.dateText2}>{dateStart}  {dateEnd}</Text> {montEnd}</Text>
            </View>
        </View>
    )
}

export default AvailableComponent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(20),
    },
    availableText: {
        fontSize: fontPixel(15),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black
    },
    subView: {
        flexDirection: "row",
        alignItems: "center",
    },
    calendarImage: {
        width: widthPixel(24),
        height: widthPixel(24),
        marginRight: widthPixel(5)
    },
    dateText1: {
        fontSize: fontPixel(15),
        color: colors.black,
        fontFamily: fonts.Poppins_Regular,
        top: heightPixel(2)
    },
    dateText2: {
        color: colors.primary
    }
})