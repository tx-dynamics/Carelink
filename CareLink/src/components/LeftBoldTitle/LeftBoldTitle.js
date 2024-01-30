import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const LeftBoldTitle = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default LeftBoldTitle

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(20),
        marginTop: heightPixel(20)
    },
    titleText: {
        fontSize: fontPixel(23),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black,
    },
})