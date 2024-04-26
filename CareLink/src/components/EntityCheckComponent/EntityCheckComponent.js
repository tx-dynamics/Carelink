import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { appIcons } from '../../Constants/Utilities/assets'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const EntityCheckComponent = ({disabled, onPress, icon, title }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{
            marginTop: heightPixel(20),
            flexDirection: "row",
            alignItems: "center",
        }}>
            <Image resizeMode='contain' source={icon ? icon : appIcons.tickUncheck} style={{
                width: widthPixel(24),
                height: widthPixel(24),
                marginRight: widthPixel(10)
            }} />
            <Text style={{
                fontSize: fontPixel(19),
                color: colors.black12,
                fontFamily: fonts.Poppins_Regular,
                top: heightPixel(2)
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default EntityCheckComponent

const styles = StyleSheet.create({})