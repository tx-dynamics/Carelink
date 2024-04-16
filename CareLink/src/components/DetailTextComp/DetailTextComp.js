import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, wp } from '../../Constants'
import Apptext from '../Apptext'
import { fonts } from '../../Constants/Fonts'
import colors from '../../config/colors'

const DetailTextComp = ({ title, detail }) => {
    return (
        <View >
            <View style={styles.directionView}>
                <Text style={styles.jobsTxt}>{title} : <Text style={{ fontFamily: fonts.Poppins_Regular }}>{detail}</Text> </Text>
            </View>
        </View>
    )
}

export default DetailTextComp

const styles = StyleSheet.create({
    directionView: {
        alignItems: "center",
        flexDirection: 'row',
        marginTop: heightPixel(10)
    },
    jobsTxt: {
        color: colors.black,
        fontFamily: fonts.Poppins_Medium,
        fontSize: fontPixel(15),
    },
})