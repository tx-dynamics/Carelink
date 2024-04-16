import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'

const VerificationModal = ({ visible, title, midText, subtitle }) => {
    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.container}>
                <Image source={appIcons.successTick} resizeMode='contain' style={styles.imgStyle} />
                {title && <Text style={styles.emailText}>{title}</Text>}
                {midText && <Text style={styles.midText}>{midText}</Text>}
                {subtitle && <Text style={styles.subText}>{subtitle}</Text>}
            </View>
        </Modal>
    )
}

export default VerificationModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: widthPixel(30)
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
    midText: {
        fontSize: fontPixel(19),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        textAlign: "center",
    },
    subText: {
        marginTop: heightPixel(10),
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        textAlign: "center",
        // lineHeight: 55,
    },
})