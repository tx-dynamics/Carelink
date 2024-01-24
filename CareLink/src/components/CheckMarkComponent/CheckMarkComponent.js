import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'
const CheckMarkComponent = ({ title, mark }) => {
    return (
        <View style={styles.container}>
            {mark && <Image resizeMode='contain' style={styles.imgStyle} source={mark} />}
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default CheckMarkComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: widthPixel(5),
    },
    imgStyle: {
        width: widthPixel(23),
        height: widthPixel(23),
        marginRight: widthPixel(3),
    },
    titleText: {
        top: heightPixel(2),
        fontSize: fontPixel(15),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black
    },
})