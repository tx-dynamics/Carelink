import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const UploadDocumentComp = ({ containerStyle, title, subTitle, onPress, btnTitle = "Upload" }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.topView, containerStyle]}>
            <View style={styles.container}>
                <View style={styles.subView}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    <Text style={styles.subtitleText}>{subTitle}</Text>
                </View>
                <View style={styles.uploadView}>
                    <Text style={styles.uploadText}>{btnTitle}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default UploadDocumentComp

const styles = StyleSheet.create({
    topView: {
        marginTop: heightPixel(30)
    },
    container: {
        width: widthPixel(374),
        height: heightPixel(144),
        borderRadius: widthPixel(10),
        backgroundColor: colors.primary,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    subView: {
        paddingTop: heightPixel(5),
        paddingHorizontal: widthPixel(15),
        width: widthPixel(346),
        height: heightPixel(118),
        borderRadius: widthPixel(10),
        borderWidth: 2,
        borderColor: colors.yellow
    },
    uploadView: {
        width: widthPixel(114),
        height: heightPixel(32),
        borderRadius: widthPixel(10),
        backgroundColor: colors.uploadButtonColor,
        position: "absolute",
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        right: widthPixel(23),
        bottom: heightPixel(-2)
    },
    uploadText: {
        top: heightPixel(1),
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Light,
        color: colors.white
    },
    subtitleText: {
        fontSize: fontPixel(15),
        fontFamily: fonts.Poppins_Light,
        color: colors.white
    },
    title: {
        fontSize: fontPixel(22),
        fontFamily: fonts.Poppins_Medium,
        color: colors.white
    },
})