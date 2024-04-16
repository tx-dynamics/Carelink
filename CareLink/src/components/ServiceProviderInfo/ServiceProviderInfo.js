import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import AvailableFacilityComp from '../AvaialableFacilityComp/AvailableFacilityComp'
import { appIcons } from '../../Constants/Utilities/assets'
import SimpleImageComponent from '../SimpleImageComponent/SimpleImageComponent'

const ServiceProviderInfo = ({ floor, availableOn, location, note, images, days }) => {
    const data = [
        {
            id: 1,
            title: "Wheelchair",

        },
        {
            id: 2,
            title: "Car Parking",
        },
        {
            id: 3,
            title: "Terrace",
        },
        {
            id: 3,
            title: "Air Conditionar",
        },
        {
            id: 3,
            title: "Elevator",
        },
        {
            id: 3,
            title: "House Keeping",
        },
        {
            id: 3,
            title: "Security Guards",
        },
    ]
    const image = [
        {
            id: 1,
            pic: appIcons.dummyPic1,
        },
        {
            id: 2,
            pic: appIcons.dummyPic2,
        },
        {
            id: 3,
            pic: appIcons.dummyPic3,
        },
        {
            id: 4,
            pic: appIcons.dummyPic3,
        },
        {
            id: 5,
            pic: appIcons.dummyPic3,
        },
    ]
    return (
        <View style={styles.main}>
            {floor && <Text style={styles.floorText}>Floor: <Text style={styles.floorSecondText}>{floor}</Text> </Text>}
            <View style={styles.mapView}>
                {data.map((item, index) => <AvailableFacilityComp key={index} title={item.title} />)}
            </View>
            {availableOn &&
                <>
                    <Text style={styles.availableText}>Available on</Text>
                    <View style={styles.calenderView}>
                        <Image resizeMode='contain' source={appIcons.calendar} style={styles.calenderIcon} />
                        <Text style={styles.dateText}>{availableOn}</Text>
                    </View>
                </>
            }
            {days && <Text style={styles.forText}>For: <Text style={{ fontFamily: fonts.Poppins_Light }}>{days} Days</Text></Text>}
            {location && <Text numberOfLines={2} style={styles.forText}>Location: <Text style={{ fontFamily: fonts.Poppins_Light }}> {location}</Text></Text>}
            {note && <>
                <Text style={styles.forText}>Note:</Text>
                <Text style={styles.noteText}>{note}</Text>
            </>}
            {images &&
                <>
                    <Text style={styles.forText}>Images</Text>
                    <FlatList showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index} style={styles.imgFlatlistStyle} horizontal data={image} renderItem={({ item, index }) => <SimpleImageComponent disabled pic={item.pic} />} />
                </>}

        </View>
    )
}

export default ServiceProviderInfo

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: widthPixel(20),
    },
    container: {
        fontSize: fontPixel(24),
        color: colors.black,
        fontFamily: fonts.Poppins_Light,
        marginTop: heightPixel(20)
    },
    bedroomText: {
        fontSize: fontPixel(16),
        color: colors.black,
        fontFamily: fonts.Poppins_Light,
        marginTop: heightPixel(20)
    },
    floorText: {
        fontSize: fontPixel(20),
        color: colors.black,
        fontFamily: fonts.Poppins_Medium,
        marginTop: heightPixel(20)
    },
    floorSecondText: {
        fontFamily: fonts.Poppins_Regular
    },
    attachBathView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: heightPixel(10)
    },
    attachTick: {
        width: widthPixel(20),
        height: widthPixel(20),
        marginRight: widthPixel(10)
    },
    mapView: {
        flexWrap: "wrap",
        flexDirection: "row"
    },
    attachText: {
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Light,
        color: colors.black12
    },
    availableText: {
        fontSize: fontPixel(16),
        color: colors.black,
        fontFamily: fonts.Poppins_Medium,
        marginTop: heightPixel(20)
    },
    flatListStyle: {
        alignSelf: "flex-start",
        marginTop: heightPixel(10)
    },
    calenderView: {
        flexDirection: "row",
        alignItems: "center",
    },
    calenderIcon: {
        width: widthPixel(24),
        height: widthPixel(24),
        marginRight: widthPixel(5)
    },
    dateText: {
        fontFamily: fonts.Poppins_Light,
        fontSize: fontPixel(15),
        color: colors.black,
        top: heightPixel(2)
    },
    forText: {
        fontFamily: fonts.Poppins_Medium,
        fontSize: fontPixel(16),
        color: colors.black,
        marginTop: heightPixel(20)
    },
    noteText: {
        textAlign: "left",
        fontFamily: fonts.Poppins_Regular,
        fontSize: fontPixel(14),
        color: colors.black,
        marginTop: heightPixel(5)
    },
    imgFlatlistStyle: {
        alignSelf: "flex-start",
        marginBottom: heightPixel(20)
    },
})