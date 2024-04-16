import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Constants'
import { appIcons } from '../../Constants/Utilities/assets'

const BrochureComp = ({ onPress, pic }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image resizeMode='contain' style={styles.imgStyle} source={pic} />
        </TouchableOpacity>
    )
}

export default BrochureComp

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: heightPixel(10)
    },
    imgStyle: {
        width: widthPixel(358),
        height: heightPixel(438),
        borderRadius: widthPixel(10),
    },
})