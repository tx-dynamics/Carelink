import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const LeftSideBoldHeading = ({ title, number, mainStyle, textStyle }) => {
    return (
        <View style={[styles.container, mainStyle]}>
            <Text style={[styles.textStyle, textStyle]}>{title} {`(${number})`}</Text>
        </View>
    )
}

export default LeftSideBoldHeading

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(20),
        marginTop: heightPixel(20)
    },
    textStyle: {
        fontSize: fontPixel(17),
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.black
    },
})