import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { heightPixel, widthPixel, wp } from '../../Constants'
import colors from '../../config/colors'

const SendMessageComponent = ({ onPress, value, onChangeText, disabled }) => {
    return (
        <View
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            style={styles.kbView}  >
            <View style={styles.ChatMsgView} >
                <TextInput value={value}
                    onChangeText={onChangeText}
                    placeholder="Type a message"
                    placeholderTextColor={colors.lightgray}
                    style={{
                        flex: 1,
                        paddingLeft: widthPixel(20),
                        color: colors.black,
                    }}
                />
            </View>
            <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.ChatSndMsgBtn}>
                <Image resizeMode='contain' source={appIcons.sendBtn} style={{
                    width: widthPixel(27),
                    height: widthPixel(27),
                }} />
            </TouchableOpacity>
        </View>
    )
}

export default SendMessageComponent

const styles = StyleSheet.create({
    kbView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ChatMsgView: {
        height: heightPixel(51),
        flexDirection: 'row',
        marginTop: heightPixel(10),
        justifyContent: 'space-between',
        width: widthPixel(310),
        alignItems: 'center',
        backgroundColor: "#e5e5e5",
        borderRadius: 23,
        marginHorizontal: widthPixel(20),
        marginBottom: 10
    },
    ChatSndMsgBtn: {
        width: widthPixel(51),
        height: widthPixel(51),
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
})