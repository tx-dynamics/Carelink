import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../AppTextInput/AppTextInput'
import colors from '../../config/colors'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import FormButton from '../FormButton'

const AddMoreModal = ({ value, onChangeText, onRequestClose, visible, cancelPress, continuePress }) => {
    return (
        <Modal animationType='fade' transparent visible={visible} onRequestClose={onRequestClose} >
            <View style={styles.container}>
                <View style={styles.subView}>
                    <AppTextInput maxLength={30} value={value} onChangeText={onChangeText} title={"Add Entity"} />
                    <View style={styles.btnView}>
                        <FormButton onPress={cancelPress} fontSize={fontPixel(15)} buttonTitle={"Cancel"} width={widthPixel(150)} />
                        <FormButton onPress={continuePress} fontSize={fontPixel(15)} buttonTitle={"Continue"} width={widthPixel(150)} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddMoreModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    subView: {
        width: "95%",
        backgroundColor: colors.white,
        borderRadius: widthPixel(10),
        paddingVertical: heightPixel(20)
    },
    btnView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: widthPixel(25),
        marginTop: heightPixel(20)
    },
})