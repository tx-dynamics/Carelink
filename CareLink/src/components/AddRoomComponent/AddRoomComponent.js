import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import { fonts } from '../../Constants/Fonts'

const AddRoomComponent = ({ }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Room 1</Text>
        </View>
    )
}

export default AddRoomComponent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(20),
        marginTop: heightPixel(10),
        marginBottom: heightPixel(10)
    },
    titleText: {
        marginLeft: widthPixel(20),
        color: colors.black,
        fontFamily: fonts.Poppins_Medium,
        fontSize: fontPixel(16),
    },
})