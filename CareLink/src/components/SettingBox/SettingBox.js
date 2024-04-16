import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import { appIcons } from '../../Constants/Utilities/assets'
import ToggleSwitch from 'toggle-switch-react-native';

const SettingBox = ({ radio, isOn, onToggle, disable, onPress, title, }) => {
    return (
        <TouchableOpacity disabled={disable} onPress={onPress} style={{
            alignSelf: "center",
            width: widthPixel(374),
            height: heightPixel(44),
            borderRadius: widthPixel(5),
            borderColor: colors.messageBody,
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: widthPixel(15),
            marginBottom: heightPixel(20)
        }}>
            <Text style={{
                fontSize: fontPixel(16),
                fontFamily: fonts.Poppins_Regular,
                color: colors.black12,
            }}>{title}</Text>
            {radio ? <ToggleSwitch
                isOn={isOn}
                onColor={colors.primary}
                offColor={colors.gray}
                labelStyle={{ display: 'none' }}
                size='small'
                onToggle={onToggle}
            /> :
                <Image resizeMode='contain' source={appIcons.forward1} style={{
                    width: widthPixel(20),
                    height: widthPixel(20),
                }} />
            }
        </TouchableOpacity>
    )
}

export default SettingBox

const styles = StyleSheet.create({})