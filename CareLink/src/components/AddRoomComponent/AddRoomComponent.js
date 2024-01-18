import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'

const AddRoomComponent = ({ }) => {
    return (
        <View style={{
            paddingHorizontal: widthPixel(20),
            marginTop: heightPixel(20)
        }}>
            <Text style={{
                color: colors.smallHeadingBlack,
                fontFamily: fonts.Poppins_Medium
            }}>Add Rooms</Text>
            <TouchableOpacity style={{
                width: widthPixel(171),
                height: heightPixel(54),
                borderRadius: widthPixel(10),
                borderWidth: 1,
                borderColor: colors.black,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end"
            }}>
                <Text style={{
                    fontSize: fontPixel(19),
                    fontFamily: fonts.Poppins_Regular,
                    color: colors.black12
                }}>+ Add Room</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddRoomComponent

const styles = StyleSheet.create({})