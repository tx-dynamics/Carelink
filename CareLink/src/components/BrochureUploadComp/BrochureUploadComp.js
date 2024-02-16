import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import BrochureComp from '../BrochureComp/BrochureComp'
import FormButton from '../FormButton'
import { uploadmage } from '../../Services/HelpingMethods'

const BrochureUploadComp = ({ upload, setUpload, onPress }) => {
    return (
        <View style={styles.container}>
            <View>
                {upload == null ?
                    <TouchableOpacity onPress={() => uploadmage(setUpload)} style={styles.uploadMainView}>
                        <Text style={styles.uploadHereText}>Upload Here</Text>
                        <Image source={appIcons.uploadIcon} style={styles.imgIcon} />
                    </TouchableOpacity> :
                    <View>
                        <BrochureComp pic={{ uri: upload }} />
                        <TouchableOpacity onPress={() => uploadmage(setUpload)} style={styles.changeView}>
                            <Text style={styles.changeText}>Change</Text>
                        </TouchableOpacity>
                    </View>

                }
            </View>
            {upload != null && <FormButton onPress={onPress} buttonTitle={"Upload"} />}
        </View>
    )
}

export default BrochureUploadComp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    uploadMainView: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: widthPixel(20),
        width: widthPixel(374),
        height: heightPixel(77),
        borderRadius: widthPixel(10),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    uploadHereText: {
        fontSize: fontPixel(19),
        fontFamily: fonts.Poppins_Medium,
        color: colors.bookedCircle
    },
    imgIcon: {
        width: widthPixel(40),
        height: widthPixel(40),
    },
    changeView: {
        backgroundColor: colors.black,
        width: widthPixel(80),
        height: heightPixel(25),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginHorizontal: widthPixel(30),
        marginTop: heightPixel(10),
        borderRadius: widthPixel(5)
    },
    changeText: {
        color: colors.white,
        fontSize: fontPixel(13),
    },
})