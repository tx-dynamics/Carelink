import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontPixel, heightPixel, widthPixel, wp } from '../../Constants'
import Apptext from '../Apptext'
import { appIcons } from '../../Constants/Utilities/assets'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import { uploadmage } from '../../Services/HelpingMethods'

const AddAgencyPhotoComp = ({ onPress, img, setImg, }) => {
    return (
        <View style={styles.container}>
            {img == null ?
                <TouchableOpacity onPress={() => uploadmage(setImg)} style={styles.cover}>
                    <Image resizeMode='contain' style={styles.picStyle} source={appIcons.addPhoto} />
                    <Apptext style={styles.cvrTxt}>Add Cover Photo</Apptext>
                </TouchableOpacity> :
                <View>
                    <ImageBackground resizeMode='cover'
                        source={{ uri: img }} style={styles.imgStyle} >
                        <TouchableOpacity onPress={() => uploadmage(setImg)} style={styles.changeView}>
                            <Text style={styles.changeText}>Change</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            }
        </View>
    )
}

export default AddAgencyPhotoComp

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(15),
        height: heightPixel(276),
    },
    cover: {
        // zIndex: 1,
        // marginTop: wp('7%'),
        width: '100%',
        height: heightPixel(276),
        backgroundColor: "#cccccc",
        alignItems: 'center',
        justifyContent: 'center'
    },
    cvrTxt: {
        marginTop: heightPixel(10),
        fontFamily: fonts.Poppins_Regular,
        fontSize: 12,
        color: colors.gray
    },
    picStyle: {
        width: widthPixel(73),
        height: widthPixel(73),
    },
    imgStyle: {
        width: widthPixel(415),
        height: heightPixel(276),
        alignItems: "flex-end",
        padding: widthPixel(10)
    },
    changeView: {
        alignSelf: "flex-end",
        backgroundColor: 230,
        width: widthPixel(80),
        height: heightPixel(30),
        borderRadius: widthPixel(60),
        alignItems: "center",
        justifyContent: "center",
    },
    changeText: {
        color: colors.white,
        fontSize: fontPixel(12),
        fontFamily: fonts.Poppins_Light,
    },
})