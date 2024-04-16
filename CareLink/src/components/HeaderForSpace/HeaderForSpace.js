import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel } from '../../Constants'

const HeaderForSpace = ({ containerStyle, marginTop }) => {
    return (
        <View style={[styles.container, containerStyle, { marginTop: marginTop ? marginTop : heightPixel(20), }]}>
        </View>
    )
}

export default HeaderForSpace

const styles = StyleSheet.create({
    container: { marginTop: heightPixel(20) },
})