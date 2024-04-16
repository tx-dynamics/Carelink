import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { appIcons } from '../../Constants/Utilities/assets'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const FeedBackCheckBox = ({ title, pic, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image resizeMode='contain' source={pic} style={styles.tickStyle} />
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity >
    )
}

export default FeedBackCheckBox

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: widthPixel(20),
        marginBottom: heightPixel(20)
    },
    tickStyle: {
        width: widthPixel(29),
        height: widthPixel(29),
        marginRight: widthPixel(15)
    },
    textStyle: {
        fontSize: fontPixel(21),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black
    },
})