import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, View, Pressable, TextInput } from 'react-native';

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

    const [hourValue, setHourValue] = useState("3.5");
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
    const [openAMPM, setOpenAMPM] = useState(false);
    const [AMPMvalue, setAMPMvalue] = useState("AM");
    const [AMPMitems, setAMPMItems] = useState([
        { label: 'AM', value: 'AM' },
        { label: 'PM', value: 'PM' },
    ]);

    return (
        <ScrollView style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"What do you want in caregiver?"}
            />
            <Apptext style={styles.innerText}>Our caregiver is...</Apptext>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Any Gender</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.Check_box} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Female</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Male</Apptext>
            </View>

            <Apptext style={[styles.innerText, { marginTop: 20 }]}>She would be living...</Apptext>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.Check_box} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>In her own room (Live-out)</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>In my mother’s home (Live-in)</Apptext>
            </View>

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

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Family or personal fund</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.Check_box} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Long-term care insurance</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Medicaid</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <Image source={iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                <Apptext style={[styles.checkBoxText]}>Other sources</Apptext>
            </View>

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