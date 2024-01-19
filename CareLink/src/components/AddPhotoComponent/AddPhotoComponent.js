import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'
import { appIcons } from '../../Constants/Utilities/assets'

const AddPhotoComponent = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.addPhotoText}>Add Photos</Text>
        </View>
    )
}
export default AddPhotoComponent
export const PhotoComponent = ({ pic, crossPress }) => {
    return (
        <View>
            <ImageBackground borderRadius={9} resizeMode='contain' source={{ uri: pic, }} style={styles.photoContainer} >
                <TouchableOpacity onPress={crossPress} style={styles.photoCrossContainer}>
                    <Image source={appIcons.cross} style={styles.photoCrossIcon} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export const AddButtonComponent = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.addButtonContainer}>
            <Image resizeMode='contain' source={appIcons.plus} style={styles.addPlusIcon} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: widthPixel(20),
        marginTop: heightPixel(30)
    },
    addPhotoText: {
        fontFamily: fonts.Poppins_Medium,
        fontSize: fontPixel(16),
        color: colors.smallHeadingBlack
    },
    photoContainer: {
        marginRight: widthPixel(15),
        marginTop: heightPixel(10),
        width: widthPixel(113),
        height: widthPixel(113),
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingTop: heightPixel(5),
        paddingRight: widthPixel(5),
        borderRadius: widthPixel(9.1)
    },
    photoCrossContainer: {
        width: widthPixel(20),
        height: widthPixel(20),
        borderRadius: widthPixel(10),
        backgroundColor: colors.gray,
        alignItems: "center",
        justifyContent: "center",
    },
    photoCrossIcon: {
        width: widthPixel(10),
        height: widthPixel(10),
        tintColor: colors.black
    },
    addButtonContainer: {
        width: widthPixel(113),
        height: widthPixel(113),
        borderRadius: widthPixel(10),
        borderWidth: 1,
        borderColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
        marginTop: heightPixel(10)
    },
    addPlusIcon: {
        width: widthPixel(24),
        height: widthPixel(24),
    },
})