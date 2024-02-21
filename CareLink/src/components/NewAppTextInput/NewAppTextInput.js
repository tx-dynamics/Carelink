import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'

const NewAppTextInput = ({ multiline, placeholder, onChangeText, value, inputStyle }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder ? placeholder : 'Write here'}
                placeholderTextColor={colors.gray}
                multiline={multiline}
                value={value}
                onChangeText={onChangeText}
                style={[styles.container, inputStyle]} />
        </View>
    )
}

export default NewAppTextInput

const styles = StyleSheet.create({
    container: {
        maxHeight: heightPixel(200),
        alignSelf: "center",
        borderRadius: widthPixel(10),
        borderColor: colors.black,
        borderWidth: 1,
        width: widthPixel(374),
        color: colors.black,
        paddingHorizontal: widthPixel(20),
        paddingBottom: heightPixel(20),
        marginBottom: heightPixel(20)
    },
})