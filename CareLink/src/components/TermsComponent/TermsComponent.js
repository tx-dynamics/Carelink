import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const TermsComponent = ({ boxPress, box, termsPress, privacyPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={boxPress} style={styles.pressView}>
                <Image resizeMode='contain' source={box} style={styles.imgStyle} />
            </TouchableOpacity>
            <Text style={styles.mainText}>By tapping confirm, you agree to the <Text onPress={termsPress} style={styles.blueText}>terms of service</Text> and<Text onPress={privacyPress} style={styles.blueText}> privacy policy</Text> of app name</Text>
        </View>
    )
}

export default TermsComponent

const styles = StyleSheet.create({
    container: {
        marginVertical: heightPixel(20),
        flexDirection: "row",
        paddingLeft: widthPixel(20),
        paddingRight: widthPixel(10),
    },
    pressView: {
        width: widthPixel(25),
    },
    imgStyle: {
        top: heightPixel(3),
        width: widthPixel(16),
        height: widthPixel(16),
    },
    mainText: {
        fontSize: fontPixel(15),
        fontFamily: fonts.Poppins_Regular,
        color: colors.messageBody
    },
    blueText: {
        color: colors.primary,
        fontSize: fontPixel(16),
    },
})