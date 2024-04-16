import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import colors from '../../config/colors';
import { heightPixel, widthPixel } from '../../Constants';
import { appIcons } from '../../Constants/Utilities/assets'
const NewSimpleTextinput = ({ title, value, secureTextEntry, onChangeText, right, rightPress, placeholderTextColor, inputStyle }) => {
    return (
        <View>
            <TextInput right={right && <TextInput.Icon name={right} onPress={rightPress} style={{ top: heightPixel(5), }} />}
                label={title}
                secureTextEntry={secureTextEntry}
                value={value}
                mode='outlined'
                underlineColor={"transparent"}
                activeUnderlineColor={"transparent"}
                activeOutlineColor={colors.black}
                onChangeText={onChangeText}
                numberOfLines={1}
                // placeholder={title}
                style={[styles.textStyle, inputStyle]}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
}

export default NewSimpleTextinput

const styles = StyleSheet.create({
    textStyle: {
        backgroundColor: "white",
        width: widthPixel(374),
        height: heightPixel(48),
        alignSelf: "center",
        marginBottom: heightPixel(20)
    },
})