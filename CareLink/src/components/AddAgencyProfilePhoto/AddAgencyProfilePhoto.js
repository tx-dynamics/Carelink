import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../Constants/Utilities/assets'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import Apptext from '../Apptext'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import { uploadmage } from '../../Services/HelpingMethods'

const AddAgencyProfilePhoto = ({ img, setImg }) => {
    return (
        <View>
            {img == null ?
                <>
                    <TouchableOpacity onPress={() => uploadmage(setImg)} style={styles.profileView}>
                        <Image resizeMode='contain' source={appIcons.profile} style={styles.profileIcon} />
                    </TouchableOpacity>
                    <Apptext style={styles.addTxt} >Add profile</Apptext>
                </> :
                <View style={styles.imgContainer}>
                    <Image resizeMode='cover' source={{ uri: img }} style={styles.userImgStyle} />
                    <Text onPress={() => uploadmage(setImg)} style={styles.changeText} >Change profile</Text>
                </View>
            }
        </View>
    )
}

export default AddAgencyProfilePhoto

const styles = StyleSheet.create({
    profileView: {
        width: widthPixel(129),
        height: widthPixel(129),
        marginTop: -65,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    addTxt: {
        alignSelf: 'center',
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: fontPixel(19),
    },
    profileIcon: {
        width: widthPixel(59),
        height: widthPixel(59),
    },
    imgContainer: {
        width: widthPixel(129),
        height: widthPixel(129),
        alignSelf: "center",
        marginTop: -65,
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    userImgStyle: {
        width: widthPixel(129),
        height: widthPixel(129),
        borderRadius: 8,
    },
    changeText: {
        textAlign: "center",
        color: colors.primary,
        fontSize: fontPixel(12),
        marginTop: heightPixel(10),
        fontFamily: fonts.Poppins_Medium
    },
})