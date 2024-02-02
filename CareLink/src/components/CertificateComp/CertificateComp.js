import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { heightPixel, widthPixel } from '../../Constants'

const CertificateComp = ({ pic, uploadedPic, imgStyle }) => {
    return (
        <View style={{
            alignItems: "center",
        }}>
            <ImageBackground source={pic ? pic : { uri: uploadedPic }} resizeMode='contain' style={{
                width: "100%",
                height: heightPixel(340),
                alignItems: "flex-end",

            }} >
                <TouchableOpacity style={{
                    top: heightPixel(20),
                    right: widthPixel(20),
                    backgroundColor: 230,
                    width: widthPixel(80),
                    height: heightPixel(30),
                    borderRadius: widthPixel(60),
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text>Change</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default CertificateComp

const styles = StyleSheet.create({})