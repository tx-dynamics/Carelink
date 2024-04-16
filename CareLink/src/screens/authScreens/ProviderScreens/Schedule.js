import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, View, Pressable, TextInput } from 'react-native';

import Apptext from '../../../components/Apptext';
import Fonticon from '../../../Constants/FontIcon';
import FormButton from '../../../components/FormButton';
import DefaultStyles from "../../../config/Styles";
import DropDownPicker from 'react-native-dropdown-picker';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';


const Schedule = ({ navigation }) => {

    const [hourValue, setHourValue] = useState("3.5");
    const [selectWeek, setSelectWeek] = useState(4);
    const [weekName, setWeekName] = useState("Thursday");
    const [tickName, setTickName] = useState("");
    const [isTick, setTick] = useState(false);
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
    useEffect(() => {
        setWeekName(selectWeek == 1 ? "Monday" : selectWeek == 2 ? "Thuesday" : selectWeek == 3 ? "Wednesday" : selectWeek == 4 ? "Thursday" : selectWeek == 5 ? "Friday" : selectWeek == 6 ? "Saturday" : "Sunday")
    }, [selectWeek])

    return (
        <AppGLobalView style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Tell us about your mother"}
            />
            <Apptext style={styles.innerText}>When would you like care to begin?</Apptext>

            <View style={styles.dateContainer}>
                <Apptext style={{ flex: 1, fontSize: 15, fontFamily: 'Poppins-Regular', }}>{"23/06/2022"}</Apptext>
                <TouchableOpacity>
                    <Image source={iconPath.calendar} style={{ width: wp(6), height: wp(6), resizeMode: "contain" }} />
                </TouchableOpacity>
            </View>
            <Apptext style={[styles.innerText, { marginTop: 15 }]}>How long do you expect to need care for your mother?</Apptext>
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

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <TouchableOpacity onPress={() => { setTick(!isTick), setTickName("Flexible schedule") }}>
                    <Image source={isTick ? iconPath.Check_box : iconPath.check_blank} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                </TouchableOpacity>
                <Apptext style={[styles.checkBoxText]}>Flexible schedule</Apptext>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: wp(5) }}>
                <TouchableOpacity onPress={() => { setTick(!isTick), setTickName("Set schedule for week") }}>
                    <Image source={isTick ? iconPath.check_blank : iconPath.Check_box} style={{ width: wp(6.3), height: wp(6.3), resizeMode: "contain" }} />
                </TouchableOpacity>
                <Apptext style={[styles.checkBoxText]}>Set schedule for week</Apptext>
            </View>
            <Apptext style={[styles.innerText, { marginTop: 20 }]}>Please specify when you need care</Apptext>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: wp(5), marginTop: 20 }}>
                <Pressable onPress={() => setSelectWeek(1)} style={[styles.weekBorder, { backgroundColor: selectWeek == 1 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 1 ? "#fff" : "#999999" }]}>M</Apptext>
                </Pressable>
                <Pressable onPress={() => setSelectWeek(2)} style={[styles.weekBorder, { backgroundColor: selectWeek == 2 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 2 ? "#fff" : "#999999" }]}>T</Apptext>
                </Pressable>
                <Pressable onPress={() => setSelectWeek(3)} style={[styles.weekBorder, { backgroundColor: selectWeek == 3 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 3 ? "#fff" : "#999999" }]}>W</Apptext>
                </Pressable>
                <Pressable onPress={() => setSelectWeek(4)} style={[styles.weekBorder, { backgroundColor: selectWeek == 4 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 4 ? "#fff" : "#999999" }]}>T</Apptext>
                </Pressable>
                <Pressable onPress={() => setSelectWeek(5)} style={[styles.weekBorder, { backgroundColor: selectWeek == 5 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 5 ? "#fff" : "#999999" }]}>F</Apptext>
                </Pressable>
                <Pressable onPress={() => setSelectWeek(6)} style={[styles.weekBorder, { backgroundColor: selectWeek == 6 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 6 ? "#fff" : "#999999" }]}>S</Apptext>
                </Pressable>
                <Pressable onPress={() => setSelectWeek(7)} style={[styles.weekBorder, { backgroundColor: selectWeek == 7 ? DefaultStyles.colors.primary : "transparent" }]}>
                    <Apptext style={[styles.weekName, { color: selectWeek == 7 ? "#fff" : "#999999" }]}>S</Apptext>
                </Pressable>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: wp(5) }}>
                <View style={{ flex: .4, alignItems: "flex-start" }}>
                    <Apptext style={[styles.dayText]}>{weekName}</Apptext>
                    <DropDownPicker
                        open={openAMPM}
                        value={AMPMvalue}
                        items={AMPMitems}
                        placeholder="AM"
                        containerStyle={{ width: wp(23), }}
                        style={{ width: wp(23), marginTop: 7 }}
                        setOpen={setOpenAMPM}
                        setValue={setAMPMvalue}
                        setItems={setAMPMItems}
                    />
                </View>
                <View style={{ flex: .6, marginLeft: 15 }}>
                    <Apptext style={[styles.dayText]}>Hours per week</Apptext>
                    <View style={{
                        height: 50, width: "100%", borderWidth: 1, marginTop: 7, borderRadius: 8,
                        justifyContent: "space-between", paddingHorizontal: 10, flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <TextInput
                            value={hourValue}
                            onChangeText={(txt) => setHourValue(txt)} />

                        <Apptext style={[styles.hourText]}>hours/week</Apptext>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    onPress={() => navigation.navigate("CareGiver")}
                />
            </View>
        </AppGLobalView >
    )
}
export default Schedule;

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
        borderWidth: 1, width: 32, height: 32, alignItems: "center", justifyContent: "center",
        borderRadius: 16, borderColor: "#999999",
    },
    dayText: {
        fontSize: 14, fontFamily: 'Poppins-Regular',
    },
    hourText: {
        fontSize: 15, fontFamily: 'Poppins-Regular', color: "#999999"
    },
    tickBox: {
        width: 25, height: 25, borderColor: 'gray', borderWidth: 1, borderRadius: 5
    },
    tickBox1: {
        width: 25, height: 25, borderColor: 'gray', borderWidth: 1, borderRadius: 5
    }

});