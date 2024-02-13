import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Constants'

const SimpleImageComponent = ({ pic, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={styles.container}>
            <Image resizeMode='contain' source={pic} style={styles.imageStyle} />
        </TouchableOpacity>
    )
}

export default SimpleImageComponent

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(10),
        width: widthPixel(113),
        height: widthPixel(113),
        justifyContent: "center",
        alignItems: "center",
        marginRight: widthPixel(10)
    },
    imageStyle: {
        width: widthPixel(113),
        height: widthPixel(113),
    },
})