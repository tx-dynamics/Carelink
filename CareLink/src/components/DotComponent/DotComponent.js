import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'

const DotComponent = ({ key, data, value, isIndex }) => {
    return (
        <View style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: heightPixel(40)
        }}>
            {data.map((item, index) => {
                return (
                    <View key={index} style={{
                        marginHorizontal: widthPixel(5),
                        alignSelf: "center",
                        backgroundColor: isIndex == index ? colors.primary : colors.dotUnselected,
                        width: isIndex == index ? widthPixel(20) : widthPixel(8),
                        height: widthPixel(8),
                        borderRadius: widthPixel(20)
                    }}>
                    </View>
                )
            })}
        </View>
    )
}

export default DotComponent

const styles = StyleSheet.create({})