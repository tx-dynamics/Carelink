import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'

const AddMoreComp = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.addMoreText}>Add More</Text>
        </TouchableOpacity>
    )
}

export default AddMoreComp

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
        backgroundColor: colors.primary,
        height: heightPixel(30),
        width: widthPixel(150),
        borderRadius: widthPixel(10),
        marginTop: heightPixel(10),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: widthPixel(20),
    },
    addMoreText: {
        top: heightPixel(1),
        fontSize: fontPixel(13),
        color: colors.white,
        fontFamily: fonts.Poppins_Medium
    },
})