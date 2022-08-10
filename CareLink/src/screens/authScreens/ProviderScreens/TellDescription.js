import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, View, Pressable, TextInput } from 'react-native';

import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import DefaultStyles from "../../../config/Styles";
import DropDownPicker from 'react-native-dropdown-picker';
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

const TellDescription = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Abc', value: 'Abc' },
        { label: 'xyz', value: 'xyz' },
        { label: 'Abc', value: 'Abc' },
        { label: 'xyz', value: 'xyz' },
        { label: 'Abc', value: 'Abc' },
        { label: 'xyz', value: 'xyz' },
    ]);

    return (
        <View style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Tell us about your mother"}
            />
            <Apptext style={styles.innerText}>Any special care concerns or medical conditions? (optional)</Apptext>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                placeholder="abc, etc"
                containerStyle={{ width: wp('90%'), marginTop: wp('3%'), alignSelf: 'center' }}
                style={{ width: wp('90%'), alignSelf: 'center' }}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <Apptext style={[styles.innerText, { marginTop: 23 }]}>Describe your mother (optional)</Apptext>
            <TextInput style={styles.TextInputStyle}
                placeholder={"Write here . . ."}>
            </TextInput>

            <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    onPress={() => navigation.navigate("Schedule")}
                />
            </View>
        </View>
    )
}
export default TellDescription;

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    innerText: {
        fontSize: 14, fontFamily: 'Poppins-Regular',
        marginLeft: wp('5%'), marginTop: 10,
    },
    TextInputStyle: {
        height: wp(53), marginHorizontal: wp('5%'), marginTop: 10,
        borderRadius: 12, borderWidth: 1, borderColor: "#000000",
        backgroundColor: "#fff", color: "#000", fontSize: 15, lineHeight: 24,
        fontFamily: 'Poppins-Regular', textAlignVertical: "top", paddingHorizontal: 10,

    }
});