import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import AvailableFacilityComp from '../AvaialableFacilityComp/AvailableFacilityComp'
import { appIcons } from '../../Constants/Utilities/assets'
const CustomerListingComp = ({ onPress, title, rightIcon, duration, facilityData, posted }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.subView}>
                <Text style={styles.titleText}>{title}</Text>
                {rightIcon && <TouchableOpacity>
                    <Image resizeMode='contain' source={rightIcon} style={styles.rightIconStyle} />
                </TouchableOpacity>
                }
            </View>
            <Text style={styles.durationText}>{"for " + duration + " days"}</Text>
            <FlatList horizontal style={styles.flatListStyle}
                data={facilityData} renderItem={({ item, index }) => <AvailableFacilityComp title={item.title} />} />
            {posted && <Text style={styles.postedText}> Posted {posted}</Text>}

        </Pressable>
    )
}

export default CustomerListingComp

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(1),
        marginBottom: heightPixel(15),
        alignSelf: "center",
        backgroundColor: colors.white,
        width: widthPixel(374),
        // height: heightPixel(105),
        borderRadius: widthPixel(7),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // paddingLeft: widthPixel(20)
    },
    titleText: {
        marginTop: heightPixel(8),
        fontSize: fontPixel(19),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black
    },
    rightIconStyle: {
        width: widthPixel(28),
        height: widthPixel(28),
    },
    durationText: {
        fontSize: fontPixel(13),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        paddingLeft: widthPixel(20)
    },
    flatListStyle: {
        marginTop: heightPixel(5),
        paddingLeft: widthPixel(20),
        marginBottom: heightPixel(10)
    },
    subView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: widthPixel(20)
    },
    postedText: {
        paddingHorizontal: widthPixel(20),
        paddingBottom: heightPixel(5),
        alignSelf: "flex-end",
        fontSize: fontPixel(12),
        fontFamily: fonts.Poppins_Light,
        color: colors.lightgray
    },
})