import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const UserInfoComp = ({ pic, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image resizeMode='contain' style={styles.picStyle} source={pic} />
            <Text numberOfLines={1} style={styles.nameText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default UserInfoComp

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(1),
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: widthPixel(20),
        alignSelf: "center",
        width: widthPixel(375),
        height: heightPixel(72),
        borderRadius: widthPixel(10),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    picStyle: {
        width: widthPixel(50),
        height: widthPixel(50),
        borderRadius: widthPixel(30),
        marginRight: widthPixel(10)
    },
    nameText: {
        maxWidth: widthPixel(280),
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black,
    },
})