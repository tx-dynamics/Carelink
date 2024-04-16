import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, View, Pressable, TextInput, TouchableOpacity } from 'react-native';

import Apptext from '../../../components/Apptext';
import Fonticon from '../../../Constants/FontIcon';
import FormButton from '../../../components/FormButton';
import DefaultStyles from "../../../config/Styles";
import DropDownPicker from 'react-native-dropdown-picker';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


const CareGiver = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [tickName, setTickName] = useState('');
    const [tickName1, setTickName1] = useState('');
    const [tickName2, setTickName2] = useState('');
    const [value, setValue] = useState(null);
    const [isItem, setSelectedItem] = useState([3]);
    const [isItem1, setSelectedItem1] = useState([1]);
    const [isItem2, setSelectedItem2] = useState([2]);
    const [items, setItems] = useState([
        { label: 'Abc', value: 'Abc' },
        { label: 'xyz', value: 'xyz' },
        { label: 'Qwerty', value: 'Qwerty' },
        { label: 'RQST', value: 'RQST' },
        { label: 'Follow', value: 'Follow' },
    ]);
    const DATA = [
        { id: 1, label: 'Any Gender' },
        { id: 2, label: 'Female' },
        { id: 3, label: 'Male' },
    ]
    const DATA1 = [
        { id: 1, label: 'In my mother’s home (Live-in)' },
        { id: 2, label: 'In my mother’s home (Live-in)' },
    ]
    const DATA2 = [
        { id: 1, label: 'Family or personal fund' },
        { id: 2, label: 'Long-term care insurance' },
        { id: 3, label: 'Medicated' },
        { id: 4, label: 'Other sources' },

    ]
    const addCategories = async (item) => {
        var selectedIdss = [...isItem]
        if (selectedIdss.includes(item.id)) {
            selectedIdss = selectedIdss.filter(id => id !== item.id)
            console.log(selectedIdss)
        }
        else {
            selectedIdss = [];
            selectedIdss.push(item.id)
        }
        await setSelectedItem(selectedIdss)
        console.log(isItem, tickName)
    }
    const addCategories1 = async (item) => {
        var selectedIdss = [...isItem1]
        if (selectedIdss.includes(item.id)) {
            selectedIdss = selectedIdss.filter(id => id !== item.id)
            console.log(selectedIdss)
        }
        else {
            selectedIdss = [];
            selectedIdss.push(item.id)
        }
        await setSelectedItem1(selectedIdss)
        console.log(isItem1, tickName1)
    }
    const addCategories2 = async (item) => {
        var selectedIdss = [...isItem2]
        if (selectedIdss.includes(item.id)) {
            selectedIdss = selectedIdss.filter(id => id !== item.id)
            console.log(selectedIdss)
        }
        else {
            selectedIdss = [];
            selectedIdss.push(item.id)
        }
        await setSelectedItem2(selectedIdss)
        console.log(isItem2, tickName2)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"What do you want in caregiver?"}
            />
            <Apptext style={styles.innerText}>Our caregiver is...</Apptext>

            <FlatList showsVerticalScrollIndicator={false}
                data={DATA}
                style={{ flex: 1 }}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => { addCategories(item), setTickName(item?.label) }} style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                        <Image source={isItem.includes(item.id) ? iconPath.Check_box : iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                        <Apptext style={[styles.checkBoxText]}>{item.label}</Apptext>
                    </TouchableOpacity>
                )}
            />
            <Apptext style={[styles.innerText, { marginTop: 20 }]}>She would be living...</Apptext>
            <FlatList showsVerticalScrollIndicator={false}
                data={DATA1}
                style={{ flex: 1 }}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => { addCategories1(item), setTickName1(item?.label) }}
                        style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                        <Image source={isItem1.includes(item.id) ? iconPath.Check_box : iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                        <Apptext style={[styles.checkBoxText]}>{item?.label}</Apptext>
                    </TouchableOpacity>
                )}
            />
            <Apptext style={[styles.innerText, { marginTop: 24 }]}>Our caregiver speaks these languages...</Apptext>
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

            <Apptext style={[styles.innerText, { marginTop: 22 }]}>We plan to payour caregiver through...</Apptext>
            <FlatList showsVerticalScrollIndicator={false}
                data={DATA2}
                style={{ flex: 1 }}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => { addCategories2(item), setTickName2(item?.label) }}
                        style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                        <Image source={isItem2.includes(item.id) ? iconPath.Check_box : iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                        <Apptext style={[styles.checkBoxText]}>{item?.label}</Apptext>
                    </TouchableOpacity>
                )}
            />
            <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30, marginTop: 50 }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    onPress={() => navigation.navigate("ReviewDetails")}
                />
            </View>
        </ScrollView>
    )
}
export default CareGiver;

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    innerText: {
        fontSize: 14, fontFamily: 'Poppins-Regular',
        marginLeft: wp('5%'), marginTop: 10,
    },
    dateContainer: {
        height: 48, borderRadius: 10, borderWidth: 1, borderColor: "#000000",
        width: wp('90%'), alignSelf: 'center', marginTop: 5, flexDirection: "row",
        alignItems: "center", paddingHorizontal: wp(2.5)
    },
    checkBoxText: {
        fontSize: 14, fontFamily: 'Poppins-Regular',
        marginLeft: wp(4),
    },
    weekName: {
        fontSize: 16, fontFamily: 'Poppins-Regular', color: "#999999",
    },
    weekBorder: {
        borderWidth: 1, width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: 16, borderColor: "#999999"
    },
    dayText: {
        fontSize: 14, fontFamily: 'Poppins-Regular',
    },
    hourText: {
        fontSize: 15, fontFamily: 'Poppins-Regular', color: "#999999"
    },

});