import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel, wp } from '../../Constants'
import colors from '../../config/colors'
import Apptext from '../Apptext'
import { appIcons } from '../../Constants/Utilities/assets'

const ProfileTopComp = ({ pic, name, city, memberDuration }) => {
    return (
        <View>
            <TouchableOpacity style={styles.imgView} >
                <Image style={styles.imgStl} source={pic} />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }} >
                <Apptext style={styles.jmsTxt} >{name}</Apptext>
                {/* <Apptext style={styles.dcTxt} >{city}</Apptext> */}
            </View>
            <View style={styles.pinkBox}>
                <Apptext style={styles.mmbrTxt} >{"Member since " + memberDuration}</Apptext>
            </View>
        </View>
    )
}

export default ProfileTopComp

const styles = StyleSheet.create({
    imgView: {
        width: widthPixel(118),
        height: widthPixel(118),
        // marginTop: wp('7%'),
        marginTop: heightPixel(10),
        // height: wp('30%'),
        alignSelf: 'center',

    },
    imgStl: {
        width: widthPixel(118),
        height: widthPixel(118),
        borderRadius: widthPixel(100)
    },
    jmsTxt: {
        marginTop: heightPixel(10),
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'

    },
    dcTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        alignSelf: 'center'
    },
    pinkBox: {
        paddingHorizontal: widthPixel(10),
        borderRadius: 10,
        backgroundColor: colors.lightPrimary,
        alignSelf: 'center',
        marginTop: heightPixel(10),
    },
    mmbrTxt: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: heightPixel(5),
    },
})