import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import { appIcons } from '../../Constants/Utilities/assets'
const NewSelectBox = ({ title, count, onPress, forward, }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {count &&
                <View style={styles.countView}>
                    <Text style={styles.countText}>{count}</Text>
                </View>}
            {forward &&
                <Image source={appIcons.forward1} resizeMode='contain' style={styles.forwardImg} />
            }
        </TouchableOpacity>
    )
}

export default NewSelectBox

const styles = StyleSheet.create({
    container: {
        marginBottom: heightPixel(20),
        alignSelf: "center",
        width: widthPixel(374),
        height: heightPixel(77),
        backgroundColor: colors.white,
        borderRadius: widthPixel(10),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: widthPixel(20),
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        fontSize: fontPixel(19),
        fontFamily: fonts.Poppins_Bold,
        color: colors.black
    },
    countView: {
        width: widthPixel(39),
        height: widthPixel(39),
        borderRadius: widthPixel(20),
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    countText: {
        top: heightPixel(1),
        fontSize: fontPixel(25),
        color: colors.white,
        fontFamily: fonts.Poppins_Light,
    },
    forwardImg: {
        width: widthPixel(24),
        height: widthPixel(24),
        tintColor: colors.black
    },
})