import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import FormButton from '../FormButton'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'
import AppGLobalView from '../AppGlobalView/AppGLobalView'

const SuccessfullListedModal = ({ visible, onPress,locationTitle }) => {
    return (
        <Modal visible={visible} animationType='fade'>
            <AppGLobalView style={styles.container}>
                <View style={styles.subView}>
                    <Image resizeMode='contain' source={appIcons.successTick} style={styles.imageStyle} />
                    <Text style={styles.successTitle}>Successfully Listed</Text>
                    <Text style={styles.midText}>You have listed Successfully your listing of</Text>
                    <Text style={styles.location}>{locationTitle}</Text>
                </View>
                <FormButton buttonTitle={"Go to Home"} onPress={onPress} />
            </AppGLobalView>
        </Modal>
    )
}

export default SuccessfullListedModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    subView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageStyle: {
        width: widthPixel(93),
        height: widthPixel(93),
    },
    successTitle: {
        fontSize: fontPixel(25),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        marginTop: heightPixel(10)
    },
    midText: {
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        marginTop: heightPixel(10)
    },
    location: {
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Medium,
        color: colors.black,
    },
})