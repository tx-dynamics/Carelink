import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { appIcons } from '../../Constants/Utilities/assets'
import { fonts } from '../../Constants/Fonts'

const ImageUploadModal = ({ visible, crossPress, cameraPress, mediaPress, onRequestClose }) => {
    return (
        <Modal animationType='fade' visible={visible} transparent onRequestClose={onRequestClose}>
            <View style={styles.container}>

                <View style={styles.subView}>
                    <TouchableOpacity onPress={crossPress} style={styles.crossView}>
                        <Image source={appIcons.cross} style={styles.crossStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={cameraPress} style={styles.pressView}>
                        <Image resizeMode='contain' source={appIcons.openCamera} style={styles.iconImg} />
                        <Text style={styles.iconText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={mediaPress} style={styles.pressView}>
                        <Image resizeMode='contain' source={appIcons.openMedia} style={styles.iconImg} />
                        <Text style={styles.iconText}>Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ImageUploadModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    crossView: {
        width: widthPixel(30),
        height: widthPixel(30),
        backgroundColor: colors.black,
        borderRadius: widthPixel(20),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: heightPixel(10),
        right: widthPixel(10)
    },
    crossStyle: {
        width: widthPixel(20),
        height: widthPixel(20),
        tintColor: colors.white
    },
    subView: {
        marginTop: heightPixel(50),
        width: widthPixel(323),
        height: heightPixel(270),
        borderRadius: widthPixel(15),
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: widthPixel(65)
    },
    pressView: {
        alignItems: "center"
    },
    iconImg: {
        width: widthPixel(44),
        height: widthPixel(44),
    },
    iconText: {
        fontSize: fontPixel(16),
        color: colors.white,
        fontFamily: fonts.Poppins_Light,
        lineHeight: 30
    },
})