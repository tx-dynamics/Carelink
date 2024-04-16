import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const AppGeneralTitle = ({ title }) => {
    return (
        <View style={{
            paddingHorizontal: widthPixel(20)
        }}>
            <Text style={{
                fontSize: fontPixel(17),
                fontFamily: fonts.Poppins_Medium,
                color: colors.black
            }}>{title}</Text>
        </View>
    )
}

export default AppGeneralTitle

const styles = StyleSheet.create({})