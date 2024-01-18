import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Constants'
import colors from '../../config/colors'
import { fonts } from '../../Constants/Fonts'
import { appIcons } from '../../Constants/Utilities/assets'
import EntityCheckComponent from '../EntityCheckComponent/EntityCheckComponent'

const BasicEntitiesComp = ({ basicData, setBasicData }) => {

    const onCheck = (item, index) => {
        const updatedDataArray = [...basicData]; // Create a copy of the dataArray
        if (!item.check) {
            updatedDataArray[index] = { ...item, check: true }; // Update the item's check property
        }
        else {
            updatedDataArray[index] = { ...item, check: false };
        }
        setBasicData(updatedDataArray); // Update the state with the modified array
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Basic Entities</Text>
            <FlatList data={basicData} renderItem={({ item, index }) => <EntityCheckComponent onPress={() => onCheck(item, index)}
                icon={item.check == true ? appIcons.tickCheck : appIcons.tickUncheck}
                title={item.title} />} />

        </View>
    )
}

export default BasicEntitiesComp

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthPixel(20),
        marginTop: heightPixel(20)
    },
    titleText: {
        fontSize: fontPixel(16),
        color: colors.smallHeadingBlack,
        fontFamily: fonts.Poppins_Medium
    },
})