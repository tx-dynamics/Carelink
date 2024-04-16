import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const LeftSubtitle = ({ title, container, numberOfLines }) => {
    return (
        <View style={styles.main}>
            <Text numberOfLines={numberOfLines} style={[styles.container, container]}>{title}</Text>
        </View>
    )
}

export default LeftSubtitle

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: widthPixel(20),
    },
    container: {
        fontSize: fontPixel(24),
        color: colors.black,
        fontFamily: fonts.Poppins_Light,
        marginTop: heightPixel(20)
    },
})