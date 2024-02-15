import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import { appIcons } from '../../Constants/Utilities/assets'

const AppTextInput = ({ mainViewStyle, title, defaultValue, editable, maxLength, onPress, placeholder, value, onChangeText, secureTextEntry, keyboardType = 'default', left, right, rightPress, multiline, containerStyle }) => {
    return (
        <View style={[styles.mainView, mainViewStyle]}>
            {title &&
                <View style={styles.topView}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>}
            <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
                {left &&
                    <View style={styles.leftView}>
                    </View>}
                <TextInput defaultValue={defaultValue}
                    editable={editable}
                    maxLength={maxLength}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    multiline={multiline}
                    style={styles.inputStyle} />
                {right &&
                    <TouchableOpacity onPress={rightPress} style={styles.rightView}>
                        <Image resizeMode='contain' source={right} style={styles.rightImg} />
                    </TouchableOpacity>}
            </Pressable>
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    mainView: {
        marginTop: heightPixel(30),
    },
    topView: {
        zIndex: 111,
        position: "absolute",
        backgroundColor: colors.white,
        top: heightPixel(-10),
        left: widthPixel(36),
        paddingHorizontal: widthPixel(1),
        height: heightPixel(22),
    },
    container: {
        height: heightPixel(53),
        flexShrink: 1,
        width: widthPixel(374),
        borderRadius: widthPixel(10),
        borderWidth: 1,
        borderColor: colors.black,
        alignSelf: "center",
        paddingHorizontal: widthPixel(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleText: {
        bottom: heightPixel(3),
        color: colors.black,
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Medium,
    },
    leftView: {
        backgroundColor: "blue",
        width: widthPixel(30),
        height: heightPixel(30),
    },
    inputStyle: {
        color: colors.black,
        flex: 1,
    },
    rightView: {
        justifyContent: "center",
        alignItems: "flex-end",
        width: widthPixel(40),
        height: widthPixel(50),
    },
    rightImg: {
        tintColor: colors.black,
        width: widthPixel(20),
        height: widthPixel(20),
    },
})