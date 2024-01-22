import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Constants'
import { appIcons } from '../../Constants/Utilities/assets'

const SimpleImageComponent = ({ pic, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={{
            marginTop: heightPixel(10),
            width: widthPixel(113),
            height: widthPixel(113),
            justifyContent: "center",
            alignItems: "center",
            marginRight: widthPixel(10)
        }}>
            <Image resizeMode='contain' source={pic} style={{
                width: widthPixel(113),
                height: widthPixel(113),
            }} />
        </TouchableOpacity>
    )
}

export default SimpleImageComponent

const styles = StyleSheet.create({})