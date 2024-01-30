import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { heightPixel, widthPixel } from '../../Constants'
import { appIcons } from '../../Constants/Utilities/assets'

const SearchComponent = ({ value, onChangeText, }) => {
    return (
        <TouchableOpacity style={styles.searchBar}>
            <Image style={styles.srchImg}
                source={appIcons.search} />
            <TextInput value={value}
                style={styles.srchTxt}
                placeholder='Search'
                placeholderTextColor={colors.lightgray}
                onChangeText={onChangeText}
            />
        </TouchableOpacity>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    searchBar: {
        height: heightPixel(49),
        width: widthPixel(376),
        marginTop: heightPixel(10),
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 9,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray"
    },
    srchImg: {
        width: widthPixel(23),
        height: heightPixel(19),
        tintColor: "lightgray",
        marginHorizontal: widthPixel(15),
    },
    srchTxt: {
        flex: 1,
        color: 'grey',
        // width: wp('70%')
    },
})