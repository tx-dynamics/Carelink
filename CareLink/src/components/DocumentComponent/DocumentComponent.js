import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'

const DocumentComponent = ({ pic, onPress }) => {
    return (
        <View style={styles.container}>{pic &&
            <ImageBackground borderRadius={widthPixel(10)} source={{ uri: pic }} style={styles.imgStyle} >
                <TouchableOpacity onPress={onPress} style={styles.crossView}>
                    <Image source={appIcons.cross} style={styles.crossImg} />
                </TouchableOpacity>
            </ImageBackground>}
        </View>
    )
}

export default DocumentComponent

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: heightPixel(30)
    },
    imgStyle: {
        width: widthPixel(374),
        height: heightPixel(200),
        alignItems: "flex-end",
        padding: widthPixel(10)
    },
    crossView: {
        width: widthPixel(30),
        height: widthPixel(30),
        borderRadius: widthPixel(20),
        backgroundColor: colors.black,
        alignItems: "center",
        justifyContent: "center",
    },
    crossImg: {
        tintColor: colors.white,
        width: widthPixel(15),
        height: widthPixel(15),
    },
})