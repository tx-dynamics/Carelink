import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'

const AgentSideListingComp = () => {
    return (
        <Pressable style={{
            alignSelf: "center",
            width: widthPixel(374),
            height: heightPixel(105),
            borderRadius: widthPixel(10),
            backgroundColor: colors.white,
            paddingHorizontal: widthPixel(20),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        }}>
            <Text>AgentSideListingComp</Text>
        </Pressable>
    )
}

export default AgentSideListingComp

const styles = StyleSheet.create({})