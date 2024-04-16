import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { appIcons } from '../../Constants/Utilities/assets'
import { fonts } from '../../Constants/Fonts'
import AvailableFacilityComp from '../AvaialableFacilityComp/AvailableFacilityComp'

const AgencyListingComp = ({ facilityData, item, rightIconPress }) => {
    return (
        <View style={{
            marginTop: heightPixel(15),
            alignSelf: "center",
            width: widthPixel(374),
            height: heightPixel(172),
            borderRadius: widthPixel(10),
            backgroundColor: colors.white,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 3,
            paddingHorizontal: widthPixel(20)
        }}>
            <View style={{
                flexDirection: "row",
                marginTop: heightPixel(15)
            }}>
                <Image resizeMode='contain' source={item.pic} style={{
                    width: widthPixel(51),
                    height: widthPixel(51),
                    borderRadius: widthPixel(30),
                }} />
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <View style={{ marginLeft: widthPixel(10) }}>
                        <Text style={{
                            fontSize: fontPixel(15),
                            fontFamily: fonts.Poppins_Regular,
                            color: colors.black
                        }}>{item.name}</Text>
                        <Text numberOfLines={1} style={{
                            width: widthPixel(160),
                            // backgroundColor: "red",
                            fontSize: fontPixel(10),
                            fontFamily: fonts.Poppins_Regular,
                            color: colors.black
                        }}>Location : {item.location}</Text>
                    </View>
                    <TouchableOpacity onPress={rightIconPress}>
                        <Text style={{
                            textDecorationLine: "underline",
                            fontSize: fontPixel(15),
                            fontFamily: fonts.Poppins_Regular,
                            color: colors.black
                        }}>See Details</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={{
                marginTop: heightPixel(10),
                fontSize: fontPixel(19),
                fontFamily: fonts.Poppins_Regular,
                color: colors.black
            }}>{item.title}</Text>
            <Text style={{
                fontSize: fontPixel(13),
                fontFamily: fonts.Poppins_Regular,
                color: colors.black
            }}>For {item.duration} days</Text>
            <View style={styles.flatListView}>
                <FlatList showsVerticalScrollIndicator={false} numColumns={2} style={styles.flatListStyle} data={facilityData} renderItem={({ item, index }) => <AvailableFacilityComp title={item.title} />} />
            </View>
        </View>
    )
}

export default AgencyListingComp

const styles = StyleSheet.create({
    flatListView: {
        width: widthPixel(240),
    },
    flatListStyle: {
        alignSelf: "flex-start",
        // marginLeft: widthPixel(20),
    },
})