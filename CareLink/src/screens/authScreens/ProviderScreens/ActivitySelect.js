import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, View, Pressable } from 'react-native';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import DefaultStyles from "../../../config/Styles";
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DATA = [
    { id: 1, img: iconPath.bathtub, title: "Bathing" },
    { id: 2, img: iconPath.beauty_saloon, title: "Dressing &\nGrooming" },
    { id: 3, img: iconPath.toilet, title: "Toileting" },
    { id: 4, img: iconPath.pills, title: "Medication\nReminders" },
    { id: 5, img: iconPath.cooking, title: "Meal Prep" },
    { id: 6, img: iconPath.shopping_cart, title: "Groceries &\nShopping" },
    { id: 7, img: iconPath.wheelchair, title: "Transferring &\nMobility" },
    { id: 8, img: iconPath.exercise, title: "Exercise" },
    { id: 9, img: iconPath.sedan, title: "Transportation" },
    { id: 4, img: iconPath.household, title: "Housekeeping" },
    { id: 10, img: iconPath.high_five, title: "Companionship" },
];

const ActivitySelect = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Tell us about your mother"}
            />
            <Apptext style={styles.innerText}>What daily activities does she need help with?</Apptext>
            <View style={{ flex: 1 }}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={DATA}
                    style={{ flex: 1 }}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-evenly", paddingBottom: 20 }}
                    renderItem={({ item, index }) => (
                        <Pressable style={styles.itemCon}>
                            <Image source={item.img} style={styles.imgText} />
                            <Apptext style={styles.titleStyles}>{item.title}</Apptext>
                        </Pressable>
                    )}
                />
                <View style={{ justifyContent: "flex-end", paddingBottom: 30 }}>
                    <FormButton
                        buttonTitle={"Next"}
                        width={wp('90%')}
                        onPress={() => navigation.navigate("TellDescription")}
                    />
                </View>
            </View>
        </View>
    )
}
export default ActivitySelect;
const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    innerText: {
        fontSize: 14, fontFamily: 'Poppins-Regular',
        marginLeft: wp('5%'), marginTop: 10,
    },
    itemCon: {
        width: 141, height: 115, borderRadius: 30,
        borderWidth: 1, borderColor: "#404040", marginTop: wp(6),
        justifyContent: "center", alignItems: "center"
    },
    imgText: {
        width: 40, height: 40, resizeMode: "contain"
    },
    titleStyles: {
        fontSize: 12, fontFamily: 'Poppins-Regular', marginTop: 9, textAlign: "center"
    },
});