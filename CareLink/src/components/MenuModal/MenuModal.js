import { FlatList, Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'

const MenuModal = ({ visible, onRequestClose, renderItem, data, mainPress }) => {

    return (
        <Modal
            transparent
            visible={visible}
            animationType='fade'
            onRequestClose={onRequestClose}>
            <Pressable onPress={mainPress} style={styles.container}>
                <View style={styles.subView}>
                    <FlatList data={data} renderItem={renderItem} />
                </View>
            </Pressable>
        </Modal>
    )
}
export const MenuTextComp = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default MenuModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subView: {
        width: widthPixel(100),
        height: heightPixel(79),
        borderRadius: widthPixel(10),
        backgroundColor: colors.white,
        marginTop: Platform.OS==="android"? heightPixel(35):heightPixel(90),
        alignSelf: "flex-end",
        marginHorizontal: widthPixel(25)
    },
    textContainer: {
        height: heightPixel(25),
        justifyContent: "center",
        marginTop: heightPixel(8),
        paddingLeft: widthPixel(10)
    },
    titleText: {
        color: colors.black,
        fontSize: fontPixel(15),
        fontFamily: fonts.Poppins_Regular,
    },
})