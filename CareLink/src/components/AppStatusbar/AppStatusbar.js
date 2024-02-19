import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const AppStatusbar = () => {
    return (
        <StatusBar translucent backgroundColor={colors.white} barStyle={"dark-content"} />
    )
}

export default AppStatusbar

const styles = StyleSheet.create({})