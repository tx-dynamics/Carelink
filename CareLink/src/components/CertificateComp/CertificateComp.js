import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const CertificateComp = ({ pic, uploadedPic, onPress, imgStyle }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.subView}>
                <Text style={styles.changeText}
                >Change</Text>
            </TouchableOpacity>
            <ImageBackground source={pic ? pic : { uri: uploadedPic }} resizeMode='contain' style={[styles.imgStyle, imgStyle]} >

            </ImageBackground>
        </View>
    )
}

export default CertificateComp

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    subView: {
        alignSelf: "flex-end",
        marginBottom: heightPixel(15),
        marginHorizontal: widthPixel(20),
        backgroundColor: 230,
        width: widthPixel(80),
        height: heightPixel(30),
        borderRadius: widthPixel(60),
        alignItems: "center",
        justifyContent: "center",
    },
    changeText: {
        color: colors.white,
        fontSize: fontPixel(12),
        top: heightPixel(1),
        fontFamily: fonts.Poppins_Light,
    },
    imgStyle: {
        width: "100%",
        height: heightPixel(340),
        alignItems: "flex-end",

    },
})