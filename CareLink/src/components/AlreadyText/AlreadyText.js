import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const AlreadyText = ({ title, subtitle, onPress }) => {
    return (
        <View>
            <Text style={styles.container}>{title}<Text style={styles.subtitleText} onPress={onPress}>{subtitle}</Text> </Text>
        </View>
    )
}

export default AlreadyText

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black12
    },
    subtitleText: {
        color: colors.primary
    },
})