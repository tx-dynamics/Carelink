import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'

const EmailVerifiedModal = ({ visible, title, subtitle }) => {
    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.container}>
                <Image source={appIcons.successTick} resizeMode='contain' style={styles.imgStyle} />
                <Text style={styles.emailText}>{title}</Text>
                <Text style={styles.subText}>{subtitle}</Text>
            </View>
        </Modal>
    )
}

export default EmailVerifiedModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    imgStyle: {
        width: widthPixel(124),
        height: widthPixel(124),
    },
    emailText: {
        fontSize: fontPixel(24),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black,
        textAlign: "center",
        lineHeight: 55,
    },
    subText: {
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        textAlign: "center",
    },
})