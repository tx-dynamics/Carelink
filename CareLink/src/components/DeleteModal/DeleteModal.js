import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { appIcons } from '../../Constants/Utilities/assets'
import { fonts } from '../../Constants/Fonts'
import FormButton from '../FormButton'

const DeleteModal = ({ visible, title, deletePress, cancelPress, rightButtonTitle }) => {
    return (
        <Modal visible={visible} transparent animationType='fade'>
            <View style={styles.container}>
                <View style={styles.subView}>
                    <Image resizeMode='contain' source={appIcons.alertBlack} style={styles.alrtPic} />
                    <Text style={styles.titleText}>{title ? title : "Are you sure you want to delete this listing"}</Text>
                    <View style={styles.btnView}>
                        <FormButton onPress={cancelPress} color={colors.black} fontSize={fontPixel(15)} buttonTitle={"Cancel"} borderColor={colors.black} borderWidth={1} borderRadius={12} backgroundColor={colors.white} containerStyle={{ marginBottom: 0, }} width={widthPixel(138)} />
                        <FormButton onPress={deletePress} fontSize={fontPixel(15)} buttonTitle={rightButtonTitle ? rightButtonTitle : "Delete"} containerStyle={{ marginBottom: 0, }} borderRadius={12} width={widthPixel(138)} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    subView: {
        backgroundColor: colors.white,
        width: widthPixel(374),
        height: heightPixel(280),
        borderRadius: widthPixel(32),
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: heightPixel(30)
    },
    alrtPic: {
        width: widthPixel(80),
        height: heightPixel(68),
    },
    titleText: {
        paddingHorizontal: widthPixel(60),
        textAlign: "center",
        // fontSize: fontPixel(15),
        fontSize: 15,
        fontFamily: fonts.Poppins_Regular,
        color: colors.black
    },
    btnView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: widthPixel(30)

    },
})